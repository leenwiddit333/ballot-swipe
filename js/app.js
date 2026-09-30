(function () {
  "use strict";

  const E = window.ELECTION;
  const I18N = window.ELECTION_I18N || {};
  const STORE_KEY = "ballot-swipe:" + E.id;
  const FRAMED = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
  const CAN_SPEAK = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  const REDUCED = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $main = document.getElementById("main");
  const $footer = document.getElementById("footer");
  const $progress = document.getElementById("progress");
  const $meter = document.getElementById("meter");
  const $sheet = document.getElementById("sheet");
  const $lang = document.getElementById("lang");

  // ---------- UI copy ----------
  const T = {
    en: {
      speechLang: "en-US", dateLocale: "en-US", other: "ES", otherLabel: "Ver en español",
      props: (n) => n + " props", progress: (a, n) => a + " of " + n,
      draft: (d, n) => "Preview: " + d + " of " + n + " cards are still being checked against the Official Voter Guide.",
      h1: 'Know every prop before you fill in <span class="hl">a single oval.</span>',
      introBody: (n) => n + " statewide propositions are on your ballot. For each one, see what it actually does, what a YES and a NO vote mean, what each side argues, and who is paying for it. Then swipe. At the end you get a cheat sheet to bring with you.",
      howYes: "Swipe right if you want to vote <b>YES</b> on the prop.",
      howNo: "Swipe left if you want to vote <b>NO</b>.",
      howSkip: "Not sure? Skip it. Leaving a prop blank is allowed, and the rest of your ballot still counts.",
      howListen: "Tap <b>Listen</b> on any card to hear it read out loud.",
      method1: "<strong>How we write each card.</strong> What a prop does comes from the Legislative Analyst's Office, the state's nonpartisan fiscal office. Each side's argument is written the way that side would make it. Campaign money comes from state filings and reporting on them.",
      method2: "<strong>We don't tell you how to vote.</strong> We show you who is behind each side so you can decide how much that matters to you.",
      start: "Start swiping", resume: "Pick up where you left off", seeSheet: "See my cheat sheet",
      topic: { housing: "Housing", budget: "Taxes & budget", elections: "Elections", health: "Health", environment: "Environment" },
      linked: (list) => "Linked to Prop " + list,
      plainEnglish: "In normal human English, please", officialTitle: "Official title (the wording on your ballot)", yesMeans: "A YES vote means", noMeans: "A NO vote means",
      supportersSay: "Supporters say:", opponentsSay: "Opponents say:",
      more: "Full breakdown, money & sources",
      listen: "Listen", stop: "Stop",
      voteNo: (n) => "Vote no on Prop " + n, voteYes: (n) => "Vote yes on Prop " + n,
      skip: "Skip", undo: "↶ undo",
      placedBy: "placed by", headsUp: "Heads up:",
      secDoes: "What it actually does", secCost: "Cost to the state", secSides: "The two sides", secMoney: "Who is paying", secRead: "Read it yourself",
      supportersSayH: "Supporters say", opponentsSayH: "Opponents say", yesCampaign: "Yes campaign", noCampaign: "No campaign",
      notVerified: "Not yet verified.", latestTotals: "Latest totals:", tracker: "CA Secretary of State contribution tracker",
      close: "Close", listenAll: "Listen to all of it",
      conflictToast: (a, b) => "YES on Prop " + a + " and Prop " + b + " may cancel each other out. Open the full breakdown for details.",
      headsUpOn: (a, b) => "Heads up on Props " + a + " & " + b + ":",
      sheetEyebrow: "Your cheat sheet", sheetH1: "Here's how you plan to vote.",
      sticker: "Ready to vote",
      sheetLede: "Tap any prop to change your answer. You can bring notes or your sample ballot into the voting booth in California.",
      notAnswered: (n) => n + " not answered yet.", keepSwiping: "Keep swiping",
      stateMeasures: "State measures", blank: "blank", dash: "—", leaveBlank: "leave blank",
      rowLabel: (n, name, a) => "Prop " + n + ", " + name + ": " + a + ". Tap to change.",
      answerLabel: { yes: "YES", no: "NO", skip: "leave blank" }, notAnsweredShort: "not answered",
      copy: "Copy as text", image: "Make an image", print: "Print", restart: "Start over",
      copied: "Copied", selected: "Selected. Copy it from the box below.",
      clearQ: "Clear all your answers?", clearYes: "Clear and start over", clearNo: "Keep them",
      imgTitle: "My ballot cheat sheet", imgHelp: "Press and hold the image (or right-click) to save it to your photos.", download: "Download image",
      imgAlt: "Your ballot cheat sheet as an image", official: "Official guide: voterguide.sos.ca.gov",
      textHead: (st, d) => "My ballot cheat sheet: " + st + ", " + d,
      fact1: "<b>Election Day is Tuesday, November 3, 2026.</b> Polls are open 7 a.m. to 8 p.m. Mail ballots must be postmarked by Election Day.",
      fact2: 'Not registered? The deadline to register online is October 19. After that you can still register and vote the same day at your county elections office or a vote center. <a href="https://registertovote.ca.gov" target="_blank" rel="noopener">registertovote.ca.gov ↗</a>',
      fact3: "Official Voter Guide:",
      say: { prop: "Proposition", yesMeans: "A yes vote means:", noMeans: "A no vote means:", sup: "Supporters say:", opp: "Opponents say:", does: "What it does:", cost: "Cost to the state:" },
      noVoice: "Read-aloud isn't available in this browser.",
      disclaimer: "Independent volunteer project. Not affiliated with the California Secretary of State, any campaign, or any political party. Always double-check with the Official Voter Guide.",
      report: "See something wrong? Report a mistake"
    },
    es: {
      speechLang: "es-US", dateLocale: "es-US", other: "EN", otherLabel: "View in English",
      props: (n) => n + " propuestas", progress: (a, n) => a + " de " + n,
      draft: (d, n) => "Versión preliminar: " + d + " de " + n + " tarjetas aún se están verificando con la Guía Oficial. La traducción está pendiente de revisión.",
      h1: 'Conoce cada propuesta antes de llenar <span class="hl">un solo óvalo.</span>',
      introBody: (n) => "Hay " + n + " propuestas estatales en tu boleta. Para cada una, ve qué hace de verdad, qué significa votar SÍ o NO, qué dice cada lado y quién la está pagando. Luego desliza. Al final tendrás una guía rápida para llevar contigo.",
      howYes: "Desliza a la derecha si quieres votar <b>SÍ</b> en la propuesta.",
      howNo: "Desliza a la izquierda si quieres votar <b>NO</b>.",
      howSkip: "¿No estás seguro? Sáltala. Puedes dejar una propuesta en blanco y el resto de tu boleta sigue contando.",
      howListen: "Toca <b>Escuchar</b> en cualquier tarjeta para oírla en voz alta.",
      method1: "<strong>Cómo escribimos cada tarjeta.</strong> Lo que hace cada propuesta viene de la Oficina del Analista Legislativo (LAO), la oficina fiscal no partidista del estado. El argumento de cada lado está escrito como ese lado lo presentaría. El dinero de las campañas viene de los reportes oficiales y de la prensa que los cita.",
      method2: "<strong>No te decimos cómo votar.</strong> Te mostramos quién está detrás de cada lado para que decidas cuánto te importa.",
      start: "Empezar", resume: "Seguir donde te quedaste", seeSheet: "Ver mi guía rápida",
      topic: { housing: "Vivienda", budget: "Impuestos y presupuesto", elections: "Elecciones", health: "Salud", environment: "Medio ambiente" },
      linked: (list) => "Ligada a Prop " + list,
      plainEnglish: "En palabras sencillas, por favor", officialTitle: "Título oficial (lo que dice tu boleta)", yesMeans: "Votar SÍ significa", noMeans: "Votar NO significa",
      supportersSay: "Quienes la apoyan dicen:", opponentsSay: "Quienes se oponen dicen:",
      more: "Detalles, dinero y fuentes",
      listen: "Escuchar", stop: "Parar",
      voteNo: (n) => "Votar no en la Prop " + n, voteYes: (n) => "Votar sí en la Prop " + n,
      skip: "Saltar", undo: "↶ deshacer",
      placedBy: "puesta por", headsUp: "Ojo:",
      secDoes: "Qué hace de verdad", secCost: "Costo para el estado", secSides: "Los dos lados", secMoney: "Quién paga", secRead: "Léelo tú mismo",
      supportersSayH: "Quienes la apoyan dicen", opponentsSayH: "Quienes se oponen dicen", yesCampaign: "Campaña del SÍ", noCampaign: "Campaña del NO",
      notVerified: "Aún no verificado.", latestTotals: "Totales más recientes:", tracker: "registro de contribuciones del Secretario de Estado (en inglés)",
      close: "Cerrar", listenAll: "Escuchar todo",
      conflictToast: (a, b) => "Votar SÍ en la Prop " + a + " y en la Prop " + b + " podría anular uno al otro. Abre los detalles para saber más.",
      headsUpOn: (a, b) => "Ojo con las Props " + a + " y " + b + ":",
      sheetEyebrow: "Tu guía rápida", sheetH1: "Así piensas votar.",
      sticker: "Listo para votar",
      sheetLede: "Toca cualquier propuesta para cambiar tu respuesta. En California puedes llevar notas o tu boleta de muestra a la casilla.",
      notAnswered: (n) => n + " sin responder.", keepSwiping: "Seguir deslizando",
      stateMeasures: "Medidas estatales", blank: "en blanco", dash: "—", leaveBlank: "en blanco",
      rowLabel: (n, name, a) => "Prop " + n + ", " + name + ": " + a + ". Toca para cambiar.",
      answerLabel: { yes: "SÍ", no: "NO", skip: "en blanco" }, notAnsweredShort: "sin responder",
      copy: "Copiar como texto", image: "Crear imagen", print: "Imprimir", restart: "Empezar de nuevo",
      copied: "Copiado", selected: "Seleccionado. Cópialo del cuadro de abajo.",
      clearQ: "¿Borrar todas tus respuestas?", clearYes: "Borrar y empezar de nuevo", clearNo: "Conservarlas",
      imgTitle: "Mi guía rápida para votar", imgHelp: "Mantén presionada la imagen (o haz clic derecho) para guardarla en tus fotos.", download: "Descargar imagen",
      imgAlt: "Tu guía rápida para votar como imagen", official: "Guía oficial: voterguide.sos.ca.gov",
      textHead: (st, d) => "Mi guía rápida para votar: " + st + ", " + d,
      fact1: "<b>El día de la elección es el martes 3 de noviembre de 2026.</b> Las casillas abren de 7 a.m. a 8 p.m. Las boletas por correo deben tener matasellos a más tardar el día de la elección.",
      fact2: '¿No estás inscrito? La fecha límite para inscribirte en línea es el 19 de octubre. Después de esa fecha, puedes inscribirte y votar el mismo día en la oficina electoral de tu condado o en un centro de votación. <a href="https://registertovote.ca.gov/es" target="_blank" rel="noopener">registertovote.ca.gov ↗</a>',
      fact3: "Guía Oficial para el Votante:",
      say: { prop: "Propuesta", yesMeans: "Votar sí significa:", noMeans: "Votar no significa:", sup: "Quienes la apoyan dicen:", opp: "Quienes se oponen dicen:", does: "Qué hace:", cost: "Costo para el estado:" },
      noVoice: "La lectura en voz alta no está disponible en este navegador.",
      disclaimer: "Proyecto independiente de voluntarios. No está afiliado al Secretario de Estado de California, a ninguna campaña ni a ningún partido político. Confirma siempre con la Guía Oficial para el Votante.",
      report: "¿Ves un error? Repórtalo"
    }
  };

  // ---------- state ----------
  const blankState = () => ({ screen: "intro", index: 0, answers: {}, history: [], lang: guessLang() });
  let state = Object.assign(blankState(), load() || {});

  function guessLang() {
    try { return (navigator.language || "en").toLowerCase().startsWith("es") && I18N.es ? "es" : "en"; } catch (e) { return "en"; }
  }
  function load() {
    try { const raw = localStorage.getItem(STORE_KEY); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  const t = () => T[state.lang] || T.en;
  // Prop content for the current language, falling back to English field by field.
  function P(i) {
    const base = E.props[i];
    const tr = state.lang !== "en" && I18N[state.lang] && I18N[state.lang].props[base.num];
    if (!tr) return base;
    const out = Object.assign({}, base, tr);
    if (tr.money) out.money = Object.assign({}, base.money || {}, tr.money);
    return out;
  }
  const PROPS = E.props;
  const N = PROPS.length;
  const idxOf = (num) => PROPS.findIndex((p) => p.num === num);
  const byNum = (num) => P(idxOf(num));

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- speech ----------
  let speakingBtn = null;
  function stopSpeaking() {
    if (!CAN_SPEAK) return;
    window.speechSynthesis.cancel();
    if (speakingBtn) { speakingBtn.setAttribute("aria-pressed", "false"); speakingBtn.querySelector(".lbl").textContent = t().listen; }
    speakingBtn = null;
  }
  function pickVoice(lang) {
    const voices = window.speechSynthesis.getVoices() || [];
    const exact = voices.find((v) => v.lang && v.lang.toLowerCase() === lang.toLowerCase());
    return exact || voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(lang.slice(0, 2)));
  }
  function speak(parts, btn) {
    if (!CAN_SPEAK) { toast(t().noVoice); return; }
    if (speakingBtn === btn) { stopSpeaking(); return; }
    stopSpeaking();
    const lang = t().speechLang;
    const voice = pickVoice(lang);
    const chunks = parts.filter(Boolean);
    chunks.forEach((text, i) => {
      const u = new SpeechSynthesisUtterance(text.replace(/\$/g, "").replace(/\bProp\b/g, t().say.prop));
      u.lang = lang; u.rate = 0.98;
      if (voice) u.voice = voice;
      if (i === chunks.length - 1) u.onend = () => { if (speakingBtn === btn) stopSpeaking(); };
      window.speechSynthesis.speak(u);
    });
    speakingBtn = btn;
    btn.setAttribute("aria-pressed", "true");
    btn.querySelector(".lbl").textContent = t().stop;
  }
  // Dollar amounts read better as words ("11.25 billion dollars") than "$11.25 billion".
  function moneyWords(s) {
    return String(s).replace(/\$([\d.,]+)(\s*(?:billion|million|mil millones|millones))?/gi, (m, num, unit) => num + (unit || "") + (state.lang === "es" ? (unit ? " de dólares" : " dólares") : " dollars"));
  }
  const speakerIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';
  function listenBtn(id) {
    return CAN_SPEAK ? '<button class="listen" type="button" id="' + id + '" aria-pressed="false">' + speakerIcon + '<span class="lbl">' + esc(t().listen) + "</span></button>" : "";
  }

  // ---------- header ----------
  function renderHeader() {
    const answered = Object.keys(state.answers).length;
    $progress.textContent = state.screen === "intro" ? t().props(N) : t().progress(answered, N);
    $meter.style.width = (answered / N) * 100 + "%";
    document.documentElement.lang = state.lang;
    if ($lang) {
      $lang.hidden = !I18N.es;
      $lang.textContent = t().other;
      $lang.setAttribute("aria-label", t().otherLabel);
    }
  }
  function draftNote() {
    const drafts = PROPS.filter((p) => p.status !== "verified").length;
    const tr = state.lang !== "en";
    return drafts || tr ? '<div class="draft-note" role="note">' + esc(t().draft(drafts, N)) + "</div>" : "";
  }

  function disclaimerHTML() {
    const L = t();
    return '<p class="disclaimer">' + esc(L.disclaimer) +
      (E.reportUrl ? ' <a href="' + esc(E.reportUrl) + '" target="_blank" rel="noopener">' + esc(L.report) + " ↗</a>" : "") + "</p>";
  }

  // ---------- intro ----------
  function renderIntro() {
    const L = t();
    const started = Object.keys(state.answers).length > 0;
    $main.className = "screen intro scroll";
    $main.innerHTML =
      draftNote() +
      '<span class="eyebrow">' + esc(E.state) + " · " + esc(formatDate(E.electionDate)) + "</span>" +
      "<h1>" + L.h1 + "</h1>" +
      "<p>" + esc(L.introBody(N)) + "</p>" +
      '<ul class="how">' +
        '<li><span class="gesture g-yes">→ ' + (state.lang === "es" ? "SÍ" : "YES") + "</span><span>" + L.howYes + "</span></li>" +
        '<li><span class="gesture g-no">← NO</span><span>' + L.howNo + "</span></li>" +
        '<li><span class="gesture g-skip">' + esc(L.skip.toLowerCase()) + "</span><span>" + L.howSkip + "</span></li>" +
        (CAN_SPEAK ? '<li><span class="gesture g-skip" style="display:grid;place-items:center"><span style="width:16px;height:16px;display:block">' + speakerIcon + '</span></span><span>' + L.howListen + "</span></li>" : "") +
      "</ul>" +
      '<div class="method"><p>' + L.method1 + "</p><p>" + L.method2 + "</p></div>" +
      '<div class="tools">' +
        '<button class="cta" id="start" type="button">' + esc(started ? L.resume : L.start) + "</button>" +
        (started ? '<button class="ghost" id="view-sheet" type="button">' + esc(L.seeSheet) + "</button>" : "") +
      "</div>" +
      disclaimerHTML();
    $footer.innerHTML = "";
    document.getElementById("start").onclick = () => go(state.index >= N ? "results" : "deck");
    const vs = document.getElementById("view-sheet");
    if (vs) vs.onclick = () => go("results");
  }

  // ---------- deck ----------
  function cardHTML(i, extraClass) {
    const p = P(i), L = t();
    const conflict = p.conflictsWith && p.conflictsWith.length ? '<span class="chip">' + esc(L.linked(p.conflictsWith.join(" & "))) + "</span>" : "";
    const top = !extraClass;
    return '<article class="card ' + (extraClass || "enter") + '" data-num="' + esc(p.num) + '" aria-label="Prop ' + esc(p.num) + ": " + esc(p.nickname) + '"' + (top ? "" : ' aria-hidden="true"') + ">" +
      '<div class="band" data-topic="' + esc(p.topic) + '"><span class="num">Prop ' + esc(p.num) + "</span><span>" + esc(L.topic[p.topic] || "") + "</span></div>" +
      '<div class="card-body">' +
        '<div class="title-row"><div><h2>' + esc(p.nickname) + "</h2></div>" + (top ? listenBtn("listen-card") : "") + "</div>" +
        '<div class="official"><b>' + esc(L.officialTitle) + "</b>" + esc(p.title) + "</div>" +
        (conflict ? "<div>" + conflict + "</div>" : "") +
        '<div class="eli5"><b>' + esc(L.plainEnglish) + "</b>" + esc(p.eli5) + "</div>" +
        '<div class="means">' +
          '<div class="mean yes"><b>' + esc(L.yesMeans) + "</b>" + esc(p.yesMeans) + "</div>" +
          '<div class="mean no"><b>' + esc(L.noMeans) + "</b>" + esc(p.noMeans) + "</div>" +
        "</div>" +
        '<div class="says">' +
          '<p><span class="who">' + esc(L.supportersSay) + "</span> " + esc(p.yesSays) + "</p>" +
          '<p><span class="who">' + esc(L.opponentsSay) + "</span> " + esc(p.noSays) + "</p>" +
        "</div>" +
        (top ? '<button class="more" type="button" data-more="' + esc(p.num) + '">' + esc(L.more) + "</button>" : "") +
      "</div>" +
      '<span class="stamp yes" aria-hidden="true">' + (state.lang === "es" ? "SÍ" : "YES") + "</span>" +
      '<span class="stamp no" aria-hidden="true">NO</span>' +
    "</article>";
  }

  function renderDeck() {
    if (state.index >= N) return go("results");
    const L = t();
    const i = state.index;
    const p = P(i);
    $main.className = "screen";
    $main.innerHTML = draftNote() +
      '<div class="deck-wrap"><div class="deck" id="deck">' + (i + 1 < N ? cardHTML(i + 1, "under") : "") + cardHTML(i) + "</div></div>";
    $footer.innerHTML =
      '<div class="actions">' +
        '<button class="vote no" id="btn-no" type="button" aria-label="' + esc(L.voteNo(p.num)) + '"><span class="oval" aria-hidden="true"></span>NO</button>' +
        '<div class="mid">' +
          '<button class="skip" id="btn-skip" type="button">' + esc(L.skip) + "</button>" +
          '<button class="undo" id="btn-undo" type="button"' + (state.history.length ? "" : " disabled") + ">" + esc(L.undo) + "</button>" +
        "</div>" +
        '<button class="vote yes" id="btn-yes" type="button" aria-label="' + esc(L.voteYes(p.num)) + '">' + (state.lang === "es" ? "SÍ" : "YES") + '<span class="oval" aria-hidden="true"></span></button>' +
      "</div>";

    const card = $main.querySelector(".card:not(.under)");
    bindSwipe(card);
    $main.querySelector("[data-more]").onclick = () => openDetails(p.num);
    const lb = document.getElementById("listen-card");
    if (lb) lb.onclick = () => speak(cardSpeech(p), lb);
    document.getElementById("btn-yes").onclick = () => fling(card, "yes");
    document.getElementById("btn-no").onclick = () => fling(card, "no");
    document.getElementById("btn-skip").onclick = () => fling(card, "skip");
    document.getElementById("btn-undo").onclick = undo;
  }

  function cardSpeech(p) {
    const S = t().say;
    return [
      S.prop + " " + p.num + ". " + p.nickname + ".",
      moneyWords(p.eli5),
      S.yesMeans + " " + moneyWords(p.yesMeans),
      S.noMeans + " " + moneyWords(p.noMeans),
      S.sup + " " + p.yesSays,
      S.opp + " " + p.noSays
    ];
  }
  function fullSpeech(p) {
    const S = t().say;
    return cardSpeech(p).concat([S.does].concat(p.plain.map(moneyWords)), [S.cost + " " + moneyWords(p.fiscal)], p.conflictNote ? [t().headsUp + " " + p.conflictNote] : []);
  }

  function bindSwipe(card) {
    let startX = 0, startY = 0, dx = 0, dragging = false, decided = false, horizontal = false, t0 = 0;
    const yesStamp = card.querySelector(".stamp.yes");
    const noStamp = card.querySelector(".stamp.no");
    card.addEventListener("animationend", () => card.classList.remove("enter"), { once: true });

    card.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, a")) return;
      dragging = true; decided = false; horizontal = false;
      startX = e.clientX; startY = e.clientY; dx = 0; t0 = performance.now();
      card.classList.remove("animating", "enter");
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
    stopSpeaking();
    const x = choice === "yes" ? window.innerWidth : choice === "no" ? -window.innerWidth : 0;
    const stamp = card.querySelector(".stamp." + choice);
    if (stamp) stamp.style.opacity = 1;
    card.classList.remove("enter");
    card.classList.add("animating");
    card.style.transform = choice === "skip" ? "translateY(-40px) scale(0.95)" : "translateX(" + x + "px) rotate(" + x / 25 + "deg)";
    card.style.opacity = "0";
    setTimeout(() => { busy = false; record(choice); }, REDUCED() ? 0 : 260);
  }

  function record(choice) {
    const p = PROPS[state.index];
    state.history.push({ num: p.num, prev: state.answers[p.num] || null });
    state.answers[p.num] = choice;
    state.index += 1;
    save();
    renderHeader();
    const clash = conflictsFor(p.num);
    if (state.index >= N) { go("results"); celebrate(); }
    else renderDeck();
    if (clash) toast(clash);
  }

  function undo() {
    const last = state.history.pop();
    if (!last) return;
    if (last.prev) state.answers[last.num] = last.prev; else delete state.answers[last.num];
    state.index = Math.max(0, idxOf(last.num));
    save();
    go("deck");
  }

  // ---------- details sheet ----------
  function list(items) {
    return items && items.length ? "<ul>" + items.map((i) => "<li>" + esc(i) + "</li>").join("") + "</ul>" : "";
  }
  function openDetails(num) {
    stopSpeaking();
    const p = byNum(num), L = t();
    const m = p.money || {};
    const nv = '<span class="unverified">' + esc(L.notVerified) + "</span>";
    $sheet.innerHTML =
      '<div class="sheet-inner">' +
        '<div class="sheet-head"><div><span class="kicker">PROP ' + esc(p.num) + " · " + esc(L.placedBy) + " " + esc(p.placedBy) + '</span><h2 id="sheet-title">' + esc(p.nickname) + "</h2></div>" +
        '<div class="sheet-tools">' + listenBtn("listen-full") + '<button class="close" type="button" id="sheet-close" aria-label="' + esc(L.close) + '">✕</button></div></div>' +
        (p.conflictNote ? '<div class="conflict"><b>' + esc(L.headsUp) + "</b> " + esc(p.conflictNote) + "</div>" : "") +
        '<div class="official"><b>' + esc(L.officialTitle) + "</b>" + esc(p.title) + "</div>" +
        '<div class="eli5"><b>' + esc(L.plainEnglish) + "</b>" + esc(p.eli5) + "</div>" +
        '<section class="sec"><h3>' + esc(L.secDoes) + "</h3>" + list(p.plain) + "</section>" +
        '<section class="sec"><h3>' + esc(L.secCost) + "</h3><p>" + esc(p.fiscal) + "</p></section>" +
        '<section class="sec"><h3>' + esc(L.secSides) + '</h3><div class="sides">' +
          '<div class="side yes"><h4>' + esc(L.supportersSayH) + "</h4><p>" + esc(p.yesSays) + "</p>" + list(p.supporters) + "</div>" +
          '<div class="side no"><h4>' + esc(L.opponentsSayH) + "</h4><p>" + esc(p.noSays) + "</p>" + list(p.opponents) + "</div>" +
        "</div></section>" +
        '<section class="sec"><h3>' + esc(L.secMoney) + '</h3><div class="sides">' +
          '<div class="side yes"><h4>' + esc(L.yesCampaign) + "</h4><p>" + (m.yes ? esc(m.yes) : nv) + "</p></div>" +
          '<div class="side no"><h4>' + esc(L.noCampaign) + "</h4><p>" + (m.no ? esc(m.no) : nv) + "</p></div>" +
        '</div><p style="font-size:var(--s-xs);color:var(--muted)">' + esc(L.latestTotals) + ' <a href="' + esc(E.moneyTracker) + '" target="_blank" rel="noopener">' + esc(L.tracker) + "</a></p></section>" +
        '<section class="sec"><h3>' + esc(L.secRead) + '</h3><div class="sources">' +
          p.sources.map((s) => '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + " ↗</a>").join("") +
        "</div></section>" +
        disclaimerHTML() +
      "</div>";
    const closeSheet = () => { stopSpeaking(); $sheet.close(); };
    document.getElementById("sheet-close").onclick = closeSheet;
    $sheet.onclick = (e) => { if (e.target === $sheet) closeSheet(); };
    $sheet.onclose = stopSpeaking;
    const lf = document.getElementById("listen-full");
    if (lf) lf.onclick = () => speak(fullSpeech(p), lf);
    if (typeof $sheet.showModal === "function") $sheet.showModal(); else $sheet.setAttribute("open", "");
  }

  // ---------- conflicts ----------
  function conflictsFor(num) {
    const p = PROPS[idxOf(num)];
    if (!p.conflictsWith || !p.conflictsWith.length || state.answers[num] !== "yes") return null;
    const clash = p.conflictsWith.filter((o) => state.answers[o] === "yes");
    return clash.length ? t().conflictToast(num, clash.join(" & ")) : null;
  }
  function allConflicts() {
    const seen = new Set(), out = [];
    PROPS.forEach((p) => {
      (p.conflictsWith || []).forEach((o) => {
        const key = [p.num, o].sort().join("-");
        if (seen.has(key)) return;
        seen.add(key);
        if (state.answers[p.num] === "yes" && state.answers[o] === "yes") {
          out.push({ a: p.num, b: o, note: byNum(o).conflictNote || byNum(p.num).conflictNote });
        }
      });
    });
    return out;
  }

  // ---------- results ----------
  function renderResults() {
    const L = t();
    $main.className = "screen results scroll";
    const conflicts = allConflicts();
    const unanswered = PROPS.filter((p) => !state.answers[p.num]);
    const yesWord = state.lang === "es" ? "SÍ" : "YES";
    $main.innerHTML =
      draftNote() +
      '<div class="results-head"><div><span class="eyebrow">' + esc(L.sheetEyebrow) + "</span><h1>" + esc(L.sheetH1) + "</h1></div>" +
        (unanswered.length ? "" : '<div class="sticker" aria-hidden="true"><span>' + esc(L.sticker) + "</span></div>") + "</div>" +
      '<p class="lede">' + esc(L.sheetLede) + "</p>" +
      (unanswered.length ? '<div class="conflict"><b>' + esc(L.notAnswered(unanswered.length)) + '</b> <button class="more" id="resume" type="button" style="padding:0">' + esc(L.keepSwiping) + "</button></div>" : "") +
      conflicts.map((c) => '<div class="conflict"><b>' + esc(L.headsUpOn(c.a, c.b)) + "</b> " + esc(c.note) + "</div>").join("") +
      '<div class="ballot" role="list">' +
        '<div class="ballot-head"><span>' + esc(L.stateMeasures) + "</span><span>" + esc(formatDate(E.electionDate)) + "</span></div>" +
        PROPS.map((_, i) => {
          const p = P(i);
          const a = state.answers[p.num];
          const marks = a === "yes" || a === "no"
            ? '<span class="marks"><span class="mark y' + (a === "yes" ? " on" : "") + '"><i></i>' + yesWord + '</span><span class="mark n' + (a === "no" ? " on" : "") + '"><i></i>NO</span></span>'
            : '<span class="blank">' + esc(a === "skip" ? L.blank : L.dash) + "</span>";
          return '<button class="row" role="listitem" type="button" data-cycle="' + esc(p.num) + '" aria-label="' + esc(L.rowLabel(p.num, p.nickname, a ? L.answerLabel[a] : L.notAnsweredShort)) + '">' +
            '<span class="row-main"><span class="n">PROP ' + esc(p.num) + '</span><span class="t">' + esc(p.nickname) + "</span></span>" + marks + "</button>";
        }).join("") +
      "</div>" +
      '<div class="tools">' +
        '<button class="cta" id="copy" type="button">' + esc(L.copy) + "</button>" +
        '<button class="ghost" id="image" type="button">' + esc(L.image) + "</button>" +
        (FRAMED ? "" : '<button class="ghost" id="print" type="button">' + esc(L.print) + "</button>") +
        '<button class="ghost" id="restart" type="button">' + esc(L.restart) + "</button>" +
      "</div>" +
      '<div id="img-slot"></div>' +
      '<div class="facts"><p>' + L.fact1 + "</p><p>" + L.fact2 + "</p><p>" + esc(L.fact3) + ' <a href="' + esc(E.officialGuide) + '" target="_blank" rel="noopener">voterguide.sos.ca.gov ↗</a></p>' + disclaimerHTML() + "</div>";
    $footer.innerHTML = "";

    $main.querySelectorAll("[data-cycle]").forEach((b) => (b.onclick = () => cycle(b.dataset.cycle)));
    const r = document.getElementById("resume");
    if (r) r.onclick = () => { state.index = idxOf(unanswered[0].num); go("deck"); };
    document.getElementById("copy").onclick = copyText;
    document.getElementById("image").onclick = makeImage;
    const pr = document.getElementById("print");
    if (pr) pr.onclick = () => window.print();
    document.getElementById("restart").onclick = confirmRestart;
  }

  function cycle(num) {
    const order = ["yes", "no", "skip"];
    state.answers[num] = order[(order.indexOf(state.answers[num]) + 1) % order.length];
    save();
    renderHeader();
    const top = $main.scrollTop;
    renderResults();
    $main.scrollTop = top;
    const row = $main.querySelector('[data-cycle="' + num + '"]');
    if (row) row.focus({ preventScroll: true });
  }

  function answerWord(a) {
    return a === "yes" ? (state.lang === "es" ? "SÍ" : "YES") : a === "no" ? "NO" : t().leaveBlank;
  }
  function sheetText() {
    const L = t();
    const lines = [L.textHead(E.state, formatDate(E.electionDate)), ""];
    PROPS.forEach((_, i) => { const p = P(i); lines.push("Prop " + p.num + " (" + p.nickname + "): " + answerWord(state.answers[p.num])); });
    lines.push("", L.official);
    return lines.join("\n");
  }

  function copyText() {
    const text = sheetText();
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.rows = N + 4; ta.id = "copy-fallback";
      const slot = document.getElementById("img-slot");
      slot.innerHTML = ""; slot.appendChild(ta); ta.focus(); ta.select();
      toast(t().selected);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => toast(t().copied), fallback);
    else fallback();
  }

  function makeImage() {
    const L = t();
    const W = 1080, pad = 64, rowH = 96, headH = 270;
    const H = headH + N * rowH + 150;
    const c = document.createElement("canvas");
    c.width = W; c.height = H;
    const g = c.getContext("2d");
    const ink = "#1b1336", muted = "#5d5579", line = "#ddd5f3";
    const yes = "#10b86f", yesInk = "#067a48", no = "#f0287f", noInk = "#c0125f";
    const band = ["#ff7a45", "#ffc53d", "#10b86f", "#3cc8f0", "#a78bff", "#f0287f"];
    g.fillStyle = "#ffffff"; g.fillRect(0, 0, W, H);
    band.forEach((col, i) => { g.fillStyle = col; g.fillRect((W / band.length) * i, 0, W / band.length + 1, 22); });
    g.fillStyle = ink;
    g.font = "900 72px Archivo, 'Arial Narrow', sans-serif";
    g.fillText(L.imgTitle, pad, 132);
    g.fillStyle = muted;
    g.font = "500 30px 'IBM Plex Mono', monospace";
    g.fillText((E.state + " · " + formatDate(E.electionDate)).toUpperCase(), pad, 186);
    g.fillStyle = ink; g.fillRect(pad, headH - 24, W - pad * 2, 6);
    PROPS.forEach((_, i) => {
      const p = P(i);
      const y = headH + i * rowH;
      const a = state.answers[p.num];
      g.fillStyle = muted; g.font = "500 26px 'IBM Plex Mono', monospace";
      g.fillText("PROP " + p.num, pad, y + 40);
      g.fillStyle = ink; g.font = "700 34px 'Public Sans', sans-serif";
      g.fillText(truncate(g, p.nickname, 540), pad, y + 78);
      const drawOval = (x, label, on, fill, txt) => {
        g.lineWidth = 4; g.strokeStyle = on ? ink : line;
        g.beginPath(); g.ellipse(x, y + 52, 28, 17, 0, 0, Math.PI * 2);
        if (on) { g.fillStyle = fill; g.fill(); }
        g.stroke();
        g.fillStyle = on ? txt : muted; g.font = (on ? "700 " : "500 ") + "28px 'IBM Plex Mono', monospace";
        g.fillText(label, x + 40, y + 62);
      };
      if (a === "yes" || a === "no") {
        drawOval(W - pad - 290, state.lang === "es" ? "SÍ" : "YES", a === "yes", yes, yesInk);
        drawOval(W - pad - 120, "NO", a === "no", no, noInk);
      } else {
        g.fillStyle = muted; g.font = "500 28px 'IBM Plex Mono', monospace";
        g.fillText(L.leaveBlank, W - pad - 210, y + 62);
      }
      g.fillStyle = line; g.fillRect(pad, y + rowH - 2, W - pad * 2, 2);
    });
    g.fillStyle = muted; g.font = "500 26px 'Public Sans', sans-serif";
    g.fillText(L.official, pad, H - 64);

    const url = c.toDataURL("image/png");
    const slot = document.getElementById("img-slot");
    slot.innerHTML = '<div class="img-out"><img alt="' + esc(L.imgAlt) + '" src="' + url + '"><p>' + esc(L.imgHelp) + "</p>" +
      (FRAMED ? "" : '<a class="ghost" href="' + url + '" download="ballot-cheat-sheet.png" style="justify-self:start;text-decoration:none">' + esc(L.download) + "</a>") + "</div>";
    slot.scrollIntoView({ behavior: REDUCED() ? "auto" : "smooth", block: "start" });
  }
  function truncate(g, text, max) {
    if (g.measureText(text).width <= max) return text;
    while (text.length && g.measureText(text + "…").width > max) text = text.slice(0, -1);
    return text + "…";
  }

  function confirmRestart() {
    const L = t();
    const slot = document.getElementById("img-slot");
    slot.innerHTML = '<div class="conflict"><b>' + esc(L.clearQ) + '</b><div class="tools" style="margin-top:10px"><button class="cta" id="yes-clear" type="button">' + esc(L.clearYes) + '</button><button class="ghost" id="no-clear" type="button">' + esc(L.clearNo) + "</button></div></div>";
    document.getElementById("yes-clear").onclick = () => { const lang = state.lang; state = blankState(); state.lang = lang; save(); go("intro"); };
    document.getElementById("no-clear").onclick = () => { slot.innerHTML = ""; };
  }

  // ---------- confetti ----------
  function celebrate() {
    if (REDUCED()) return;
    const cv = document.createElement("canvas");
    cv.id = "confetti";
    document.body.appendChild(cv);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    const g = cv.getContext("2d");
    g.scale(dpr, dpr);
    const cols = ["#ff5a1f", "#ffc53d", "#10b86f", "#3cc8f0", "#a78bff", "#f0287f"];
    const bits = Array.from({ length: 140 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 80, y: innerHeight * 0.35,
      vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 14 - 4,
      r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
      w: 6 + Math.random() * 6, h: 10 + Math.random() * 8, c: cols[(Math.random() * cols.length) | 0], oval: Math.random() < 0.35
    }));
    const t0 = performance.now();
    (function frame(now) {
      const el = now - t0;
      g.clearRect(0, 0, innerWidth, innerHeight);
      bits.forEach((b) => {
        b.vy += 0.35; b.vx *= 0.99; b.x += b.vx; b.y += b.vy; b.r += b.vr;
        g.save(); g.translate(b.x, b.y); g.rotate(b.r); g.fillStyle = b.c;
        g.globalAlpha = Math.max(0, 1 - el / 2400);
        if (b.oval) { g.beginPath(); g.ellipse(0, 0, b.w, b.w * 0.6, 0, 0, Math.PI * 2); g.fill(); }
        else g.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
        g.restore();
      });
      if (el < 2400) requestAnimationFrame(frame); else cv.remove();
    })(t0);
  }

  // ---------- misc ----------
  let toastTimer;
  function toast(msg) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 4200);
  }
  function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(t().dateLocale, { month: "long", day: "numeric", year: "numeric" });
  }

  function go(screen) {
    stopSpeaking();
    state.screen = screen;
    save();
    renderHeader();
    if (screen === "deck") renderDeck();
    else if (screen === "results") renderResults();
    else renderIntro();
    $main.scrollTop = 0;
  }

  document.getElementById("home").onclick = () => go("intro");
  if ($lang) $lang.onclick = () => { state.lang = state.lang === "es" ? "en" : "es"; go(state.screen); };
  document.addEventListener("keydown", (e) => {
    if (state.screen !== "deck" || $sheet.open) return;
    const card = $main.querySelector(".card:not(.under)");
    if (e.key === "ArrowRight") fling(card, "yes");
    else if (e.key === "ArrowLeft") fling(card, "no");
    else if (e.key === "ArrowDown") fling(card, "skip");
    else if (e.key === "Backspace" || e.key.toLowerCase() === "z") undo();
  });
  if (CAN_SPEAK) { try { window.speechSynthesis.getVoices(); } catch (e) { /* ignore */ } }

  go(state.screen || "intro");
})();
