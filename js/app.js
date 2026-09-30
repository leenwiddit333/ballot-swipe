(function () {
  "use strict";

  const E = window.ELECTION;
  const PROPS = E.props;
  const STORE_KEY = "ballot-swipe:" + E.id;
  const FRAMED = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();

  const $main = document.getElementById("main");
  const $footer = document.getElementById("footer");
  const $progress = document.getElementById("progress");
  const $meter = document.getElementById("meter");
  const $sheet = document.getElementById("sheet");

  // ---------- state ----------
  let state = load() || { screen: "intro", index: 0, answers: {}, history: [] };

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byNum = (n) => PROPS.find((p) => p.num === n);
  const LABEL = { yes: "YES", no: "NO", skip: "Leave blank" };

  // ---------- header ----------
  function renderHeader() {
    const answered = Object.keys(state.answers).length;
    $progress.textContent = state.screen === "intro" ? PROPS.length + " props" : answered + " of " + PROPS.length;
    $meter.style.width = (answered / PROPS.length) * 100 + "%";
  }

  function draftNote() {
    const drafts = PROPS.filter((p) => p.status !== "verified").length;
    if (!drafts) return "";
    return '<div class="draft-note" role="note">Preview: ' + drafts + " of " + PROPS.length +
      ' cards are still being checked against the Official Voter Guide.</div>';
  }

  // ---------- intro ----------
  function renderIntro() {
    $main.className = "screen intro scroll";
    $main.innerHTML =
      draftNote() +
      '<span class="eyebrow">' + esc(E.state) + " · " + esc(formatDate(E.electionDate)) + "</span>" +
      "<h1>Know every prop before you fill in a single oval.</h1>" +
      "<p>" + PROPS.length + " statewide propositions are on your ballot. For each one, see what it actually does, what a YES and a NO vote mean, what each side argues, and who is paying for it. Then swipe. At the end you get a cheat sheet to bring with you.</p>" +
      '<ul class="how">' +
        '<li><span class="gesture g-yes">→ YES</span><span>Swipe right if you want to vote <b>YES</b> on the prop.</span></li>' +
        '<li><span class="gesture g-no">← NO</span><span>Swipe left if you want to vote <b>NO</b>.</span></li>' +
        '<li><span class="gesture g-skip">skip</span><span>Not sure? Skip it. Leaving a prop blank is allowed, and the rest of your ballot still counts.</span></li>' +
      "</ul>" +
      '<div class="method">' +
        "<p><strong>How we write each card.</strong> What a prop does comes from the Legislative Analyst's Office, the state's nonpartisan fiscal office. Each side's argument is written the way that side would make it. Campaign money comes from state filings and reporting on them.</p>" +
        "<p><strong>We don't tell you how to vote.</strong> We show you who is behind each side so you can decide how much that matters to you.</p>" +
      "</div>" +
      '<div class="tools">' +
        '<button class="cta" id="start" type="button">' + (Object.keys(state.answers).length ? "Pick up where you left off" : "Start swiping") + "</button>" +
        (Object.keys(state.answers).length ? '<button class="ghost" id="view-sheet" type="button">See my cheat sheet</button>' : "") +
      "</div>";
    $footer.innerHTML = "";
    document.getElementById("start").onclick = () => go(state.index >= PROPS.length ? "results" : "deck");
    const vs = document.getElementById("view-sheet");
    if (vs) vs.onclick = () => go("results");
  }

  // ---------- deck ----------
  function cardHTML(p, extraClass) {
    const conflict = p.conflictsWith && p.conflictsWith.length
      ? '<span class="chip warn">Linked to Prop ' + p.conflictsWith.join(" & ") + "</span>" : "";
    return '<article class="card ' + (extraClass || "") + '" data-num="' + esc(p.num) + '" aria-label="Proposition ' + esc(p.num) + ": " + esc(p.nickname) + '">' +
      '<div class="card-body">' +
        '<div class="card-top"><span class="prop-no">PROP ' + esc(p.num) + "</span>" + conflict + "</div>" +
        "<h2>" + esc(p.nickname) + "</h2>" +
        '<p class="official">' + esc(p.title) + "</p>" +
        '<div class="means">' +
          '<div class="mean yes"><b>A YES vote means</b>' + esc(p.yesMeans) + "</div>" +
          '<div class="mean no"><b>A NO vote means</b>' + esc(p.noMeans) + "</div>" +
        "</div>" +
        '<div class="says">' +
          '<p><span class="who">Supporters say:</span> ' + esc(p.yesSays) + "</p>" +
          '<p><span class="who">Opponents say:</span> ' + esc(p.noSays) + "</p>" +
        "</div>" +
        '<button class="more" type="button" data-more="' + esc(p.num) + '">Full breakdown, money &amp; sources</button>' +
      "</div>" +
      '<span class="stamp yes" aria-hidden="true">YES</span>' +
      '<span class="stamp no" aria-hidden="true">NO</span>' +
    "</article>";
  }

  function renderDeck() {
    if (state.index >= PROPS.length) return go("results");
    const p = PROPS[state.index];
    const next = PROPS[state.index + 1];
    $main.className = "screen";
    $main.innerHTML = draftNote() +
      '<div class="deck-wrap"><div class="deck" id="deck">' +
        (next ? cardHTML(next, "under") : "") + cardHTML(p) +
      "</div></div>";
    $footer.innerHTML =
      '<div class="actions">' +
        '<button class="vote no" id="btn-no" type="button" aria-label="Vote no on Prop ' + esc(p.num) + '"><span class="oval" aria-hidden="true"></span>NO</button>' +
        '<div style="display:grid;justify-items:center">' +
          '<button class="skip" id="btn-skip" type="button">Skip</button>' +
          '<button class="undo" id="btn-undo" type="button"' + (state.history.length ? "" : " disabled") + ">↶ undo</button>" +
        "</div>" +
        '<button class="vote yes" id="btn-yes" type="button" aria-label="Vote yes on Prop ' + esc(p.num) + '">YES<span class="oval" aria-hidden="true"></span></button>' +
      "</div>";

    const card = $main.querySelector(".card:not(.under)");
    bindSwipe(card);
    $main.querySelectorAll("[data-more]").forEach((b) => (b.onclick = () => openDetails(b.dataset.more)));
    document.getElementById("btn-yes").onclick = () => fling(card, "yes");
    document.getElementById("btn-no").onclick = () => fling(card, "no");
    document.getElementById("btn-skip").onclick = () => fling(card, "skip");
    document.getElementById("btn-undo").onclick = undo;
  }

  function bindSwipe(card) {
    let startX = 0, startY = 0, dx = 0, dragging = false, decided = false, horizontal = false, t0 = 0;
    const yesStamp = card.querySelector(".stamp.yes");
    const noStamp = card.querySelector(".stamp.no");

    card.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, a")) return;
      dragging = true; decided = false; horizontal = false;
      startX = e.clientX; startY = e.clientY; dx = 0; t0 = performance.now();
      card.classList.remove("animating");
    });
    card.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const mx = e.clientX - startX, my = e.clientY - startY;
      if (!decided && (Math.abs(mx) > 8 || Math.abs(my) > 8)) {
        decided = true; horizontal = Math.abs(mx) > Math.abs(my);
        if (horizontal) { try { card.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } }
      }
      if (!horizontal) return;
      dx = mx;
      card.style.transform = "translateX(" + dx + "px) rotate(" + dx / 18 + "deg)";
      yesStamp.style.opacity = Math.max(0, Math.min(1, dx / 110));
      noStamp.style.opacity = Math.max(0, Math.min(1, -dx / 110));
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      if (!horizontal) return;
      const v = Math.abs(dx) / Math.max(1, performance.now() - t0);
      if (Math.abs(dx) > 110 || (Math.abs(dx) > 50 && v > 0.6)) {
        fling(card, dx > 0 ? "yes" : "no");
      } else {
        card.classList.add("animating");
        card.style.transform = "";
        yesStamp.style.opacity = 0; noStamp.style.opacity = 0;
      }
    };
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", end);
  }

  let busy = false;
  function fling(card, choice) {
    if (busy || !card) return;
    busy = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const x = choice === "yes" ? window.innerWidth : choice === "no" ? -window.innerWidth : 0;
    const stamp = card.querySelector(".stamp." + choice);
    if (stamp) stamp.style.opacity = 1;
    card.classList.add("animating");
    card.style.transform = choice === "skip" ? "translateY(-40px) scale(0.95)" : "translateX(" + x + "px) rotate(" + x / 25 + "deg)";
    card.style.opacity = "0";
    setTimeout(() => { busy = false; record(choice); }, reduce ? 0 : 260);
  }

  function record(choice) {
    const p = PROPS[state.index];
    state.history.push({ num: p.num, prev: state.answers[p.num] || null });
    state.answers[p.num] = choice;
    state.index += 1;
    save();
    renderHeader();
    const linked = conflictsFor(p.num);
    if (linked) toast(linked);
    state.index >= PROPS.length ? go("results") : renderDeck();
  }

  function undo() {
    const last = state.history.pop();
    if (!last) return;
    if (last.prev) state.answers[last.num] = last.prev; else delete state.answers[last.num];
    state.index = Math.max(0, PROPS.findIndex((p) => p.num === last.num));
    save();
    go("deck");
  }

  // ---------- details sheet ----------
  function list(items) {
    return items && items.length ? "<ul>" + items.map((i) => "<li>" + esc(i) + "</li>").join("") + "</ul>" : "";
  }
  function openDetails(num) {
    const p = byNum(num);
    const m = p.money || {};
    const moneyYes = m.yes ? esc(m.yes) : '<span class="unverified">Not yet verified.</span>';
    const moneyNo = m.no ? esc(m.no) : '<span class="unverified">Not yet verified.</span>';
    $sheet.innerHTML =
      '<div class="sheet-inner">' +
        '<div class="sheet-head"><div><span class="prop-no">PROP ' + esc(p.num) + " · placed by " + esc(p.placedBy) + '</span><h2 id="sheet-title">' + esc(p.nickname) + '</h2><p class="official" style="margin:4px 0 0">' + esc(p.title) + "</p></div>" +
        '<button class="close" type="button" id="sheet-close" aria-label="Close">✕</button></div>' +
        (p.conflictNote ? '<div class="conflict"><b>Heads up:</b> ' + esc(p.conflictNote) + "</div>" : "") +
        '<section class="sec"><h3>What it actually does</h3>' + list(p.plain) + "</section>" +
        '<section class="sec"><h3>Cost to the state</h3><p>' + esc(p.fiscal) + "</p></section>" +
        '<section class="sec"><h3>The two sides</h3><div class="sides">' +
          '<div class="side yes"><h4>Supporters say</h4><p>' + esc(p.yesSays) + "</p>" + list(p.supporters) + "</div>" +
          '<div class="side no"><h4>Opponents say</h4><p>' + esc(p.noSays) + "</p>" + list(p.opponents) + "</div>" +
        "</div></section>" +
        '<section class="sec"><h3>Who is paying</h3><div class="sides">' +
          '<div class="side yes"><h4>Yes campaign</h4><p>' + moneyYes + "</p></div>" +
          '<div class="side no"><h4>No campaign</h4><p>' + moneyNo + "</p></div>" +
        '</div><p style="font-size:var(--s-xs);color:var(--muted)">Latest totals: <a href="' + esc(E.moneyTracker) + '" target="_blank" rel="noopener">CA Secretary of State contribution tracker</a></p></section>' +
        '<section class="sec"><h3>Read it yourself</h3><div class="sources">' +
          p.sources.map((s) => '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + " ↗</a>").join("") +
        "</div></section>" +
      "</div>";
    document.getElementById("sheet-close").onclick = () => $sheet.close();
    $sheet.onclick = (e) => { if (e.target === $sheet) $sheet.close(); };
    if (typeof $sheet.showModal === "function") $sheet.showModal(); else $sheet.setAttribute("open", "");
  }

  // ---------- conflicts ----------
  // Returns a message when the user's answers on linked props may work against each other.
  function conflictsFor(num) {
    const p = byNum(num);
    if (!p || !p.conflictsWith || !p.conflictsWith.length) return null;
    const mine = state.answers[num];
    const clash = p.conflictsWith.filter((o) => state.answers[o] === "yes" && mine === "yes");
    if (!clash.length) return null;
    return "YES on Prop " + num + " and Prop " + clash.join(" & ") + " may cancel each other out. Open the full breakdown for details.";
  }
  function allConflicts() {
    const seen = new Set(), out = [];
    PROPS.forEach((p) => {
      (p.conflictsWith || []).forEach((o) => {
        const key = [p.num, o].sort().join("-");
        if (seen.has(key)) return;
        seen.add(key);
        if (state.answers[p.num] === "yes" && state.answers[o] === "yes") {
          const note = (byNum(o).conflictNote) || p.conflictNote;
          out.push({ a: p.num, b: o, note });
        }
      });
    });
    return out;
  }

  // ---------- results ----------
  function renderResults() {
    $main.className = "screen results scroll";
    const conflicts = allConflicts();
    const unanswered = PROPS.filter((p) => !state.answers[p.num]);
    $main.innerHTML =
      draftNote() +
      '<span class="eyebrow">Your cheat sheet</span>' +
      "<h1>Here's how you plan to vote.</h1>" +
      '<p class="lede">Tap any prop to change your answer. You can bring notes or your sample ballot into the voting booth in California.</p>' +
      (unanswered.length ? '<div class="conflict"><b>' + unanswered.length + " not answered yet.</b> " + '<button class="more" id="resume" type="button" style="padding:0">Keep swiping</button></div>' : "") +
      conflicts.map((c) => '<div class="conflict"><b>Heads up on Props ' + esc(c.a) + " &amp; " + esc(c.b) + ":</b> " + esc(c.note) + "</div>").join("") +
      '<div class="ballot" role="list">' +
        '<div class="ballot-head"><span>State measures</span><span>' + esc(formatDate(E.electionDate)) + "</span></div>" +
        PROPS.map((p) => {
          const a = state.answers[p.num];
          const marks = a === "yes" || a === "no"
            ? '<span class="marks"><span class="mark y' + (a === "yes" ? " on" : "") + '"><i></i>YES</span><span class="mark n' + (a === "no" ? " on" : "") + '"><i></i>NO</span></span>'
            : '<span class="blank">' + (a === "skip" ? "blank" : "—") + "</span>";
          return '<button class="row" role="listitem" type="button" data-cycle="' + esc(p.num) + '" aria-label="Prop ' + esc(p.num) + ", " + esc(p.nickname) + ": " + (a ? LABEL[a] : "not answered") + '. Tap to change.">' +
            '<span class="row-main"><span class="n">PROP ' + esc(p.num) + '</span><span class="t">' + esc(p.nickname) + "</span></span>" + marks + "</button>";
        }).join("") +
      "</div>" +
      '<div class="tools">' +
        '<button class="cta" id="copy" type="button">Copy as text</button>' +
        '<button class="ghost" id="image" type="button">Make an image</button>' +
        (FRAMED ? "" : '<button class="ghost" id="print" type="button">Print</button>') +
        '<button class="ghost" id="restart" type="button">Start over</button>' +
      "</div>" +
      '<div id="img-slot"></div>' +
      '<div class="facts">' +
        '<p><b>Election Day is Tuesday, November 3, 2026.</b> Polls are open 7 a.m. to 8 p.m. Mail ballots must be postmarked by Election Day.</p>' +
        '<p>Not registered? The deadline to register online is October 19. After that you can still register and vote the same day at your county elections office or a vote center. <a href="https://registertovote.ca.gov" target="_blank" rel="noopener">registertovote.ca.gov ↗</a></p>' +
        '<p>Official Voter Guide: <a href="' + esc(E.officialGuide) + '" target="_blank" rel="noopener">voterguide.sos.ca.gov ↗</a></p>' +
      "</div>";
    $footer.innerHTML = "";

    $main.querySelectorAll("[data-cycle]").forEach((b) => (b.onclick = () => cycle(b.dataset.cycle)));
    const r = document.getElementById("resume");
    if (r) r.onclick = () => { state.index = PROPS.indexOf(unanswered[0]); go("deck"); };
    document.getElementById("copy").onclick = copyText;
    document.getElementById("image").onclick = makeImage;
    const pr = document.getElementById("print");
    if (pr) pr.onclick = () => window.print();
    document.getElementById("restart").onclick = confirmRestart;
  }

  function cycle(num) {
    const order = ["yes", "no", "skip"];
    const cur = state.answers[num];
    state.answers[num] = order[(order.indexOf(cur) + 1) % order.length];
    save();
    renderHeader();
    renderResults();
    const row = $main.querySelector('[data-cycle="' + num + '"]');
    if (row) row.focus();
  }

  function sheetText() {
    const lines = ["My ballot cheat sheet: " + E.state + ", " + formatDate(E.electionDate), ""];
    PROPS.forEach((p) => {
      const a = state.answers[p.num];
      lines.push("Prop " + p.num + " (" + p.nickname + "): " + (a === "yes" ? "YES" : a === "no" ? "NO" : "blank"));
    });
    lines.push("", "Official guide: voterguide.sos.ca.gov");
    return lines.join("\n");
  }

  function copyText() {
    const text = sheetText();
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.width = "100%"; ta.rows = PROPS.length + 4;
      ta.id = "copy-fallback";
      const slot = document.getElementById("img-slot");
      slot.innerHTML = ""; slot.appendChild(ta); ta.focus(); ta.select();
      toast("Selected. Copy it from the box below.");
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => toast("Copied"), fallback);
    } else fallback();
  }

  function makeImage() {
    const css = getComputedStyle(document.documentElement);
    const col = (v) => css.getPropertyValue(v).trim();
    const W = 1080, pad = 64, rowH = 96, headH = 250;
    const H = headH + PROPS.length * rowH + 140;
    const c = document.createElement("canvas");
    c.width = W; c.height = H;
    const g = c.getContext("2d");
    const paper = "#ffffff", ink = "#15213b", muted = "#5a6275", line = "#d6dae0";
    const yes = "#17704f", no = "#8b3461", poppy = col("--poppy") || "#d9571a";
    g.fillStyle = paper; g.fillRect(0, 0, W, H);
    g.fillStyle = poppy; g.fillRect(0, 0, W, 14);
    g.fillStyle = ink;
    g.font = "800 64px Archivo, Arial Narrow, sans-serif";
    g.fillText("My ballot cheat sheet", pad, 120);
    g.fillStyle = muted;
    g.font = "500 30px 'IBM Plex Mono', monospace";
    g.fillText(E.state.toUpperCase() + " · " + formatDate(E.electionDate).toUpperCase(), pad, 175);
    g.fillStyle = ink; g.fillRect(pad, headH - 20, W - pad * 2, 4);
    PROPS.forEach((p, i) => {
      const y = headH + i * rowH;
      const a = state.answers[p.num];
      g.fillStyle = muted; g.font = "500 26px 'IBM Plex Mono', monospace";
      g.fillText("PROP " + p.num, pad, y + 40);
      g.fillStyle = ink; g.font = "700 34px 'Public Sans', sans-serif";
      g.fillText(truncate(g, p.nickname, 560), pad, y + 78);
      const drawOval = (x, label, on, color) => {
        g.lineWidth = 4; g.strokeStyle = on ? color : line; g.fillStyle = color;
        g.beginPath(); g.ellipse(x, y + 52, 28, 17, 0, 0, Math.PI * 2); g.stroke();
        if (on) g.fill();
        g.fillStyle = on ? color : muted; g.font = (on ? "700 " : "500 ") + "28px 'IBM Plex Mono', monospace";
        g.fillText(label, x + 40, y + 62);
      };
      if (a === "yes" || a === "no") {
        drawOval(W - pad - 290, "YES", a === "yes", yes);
        drawOval(W - pad - 120, "NO", a === "no", no);
      } else {
        g.fillStyle = muted; g.font = "500 28px 'IBM Plex Mono', monospace";
        g.fillText("leave blank", W - pad - 200, y + 62);
      }
      g.fillStyle = line; g.fillRect(pad, y + rowH - 2, W - pad * 2, 2);
    });
    g.fillStyle = muted; g.font = "500 26px 'Public Sans', sans-serif";
    g.fillText("Official guide: voterguide.sos.ca.gov", pad, H - 60);

    const url = c.toDataURL("image/png");
    const slot = document.getElementById("img-slot");
    slot.innerHTML = '<div class="img-out"><img alt="Your ballot cheat sheet as an image" src="' + url + '"><p>Press and hold the image (or right-click) to save it to your photos.</p>' +
      (FRAMED ? "" : '<a class="ghost" href="' + url + '" download="ballot-cheat-sheet.png" style="justify-self:start;text-decoration:none">Download image</a>') + "</div>";
    slot.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function truncate(g, text, max) {
    if (g.measureText(text).width <= max) return text;
    while (text.length && g.measureText(text + "…").width > max) text = text.slice(0, -1);
    return text + "…";
  }

  function confirmRestart() {
    const slot = document.getElementById("img-slot");
    slot.innerHTML = '<div class="conflict"><b>Clear all your answers?</b> <div class="tools" style="margin-top:8px"><button class="cta" id="yes-clear" type="button">Clear and start over</button><button class="ghost" id="no-clear" type="button">Keep them</button></div></div>';
    document.getElementById("yes-clear").onclick = () => { state = { screen: "intro", index: 0, answers: {}, history: [] }; save(); go("intro"); };
    document.getElementById("no-clear").onclick = () => { slot.innerHTML = ""; };
  }

  // ---------- misc ----------
  let toastTimer;
  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 3800);
  }
  function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }

  function go(screen) {
    state.screen = screen;
    save();
    renderHeader();
    if (screen === "deck") renderDeck();
    else if (screen === "results") renderResults();
    else renderIntro();
    $main.scrollTop = 0;
  }

  document.getElementById("home").onclick = () => go("intro");
  document.addEventListener("keydown", (e) => {
    if (state.screen !== "deck" || $sheet.open) return;
    const card = $main.querySelector(".card:not(.under)");
    if (e.key === "ArrowRight") fling(card, "yes");
    else if (e.key === "ArrowLeft") fling(card, "no");
    else if (e.key === "ArrowDown") fling(card, "skip");
    else if (e.key === "Backspace" || e.key.toLowerCase() === "z") undo();
  });

  go(state.screen || "intro");
})();
