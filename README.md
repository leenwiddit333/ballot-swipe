# Ballot Swipe

Swipe through every California statewide proposition, see what a YES and a NO vote actually do, and end up with a ballot cheat sheet you can bring to the polls.

Starts with the **November 3, 2026 California General Election** (14 props).

## How it works

- Each card shows what the prop does, what YES means, what NO means, and each side's strongest argument.
- "Full breakdown" adds the cost to the state, named supporters and opponents, who is funding each side, and links to the original sources.
- Swipe right = YES, swipe left = NO, Skip = leave it blank. Arrow keys work on desktop.
- Props that interact (40, 41, 42) show a warning if your answers could cancel each other out.
- The cheat sheet can be copied as text, saved as an image, or printed. Answers stay only in the viewer's browser. Nothing is sent to a server.

## Editorial standards

This app earns trust by being open about where every claim comes from. Each card has four layers:

1. **What it does**: from the Legislative Analyst's Office (LAO) analysis, rewritten in plain language (aim for an 8th-grade reading level).
2. **What each side says**: the strongest version of each side's case, written in their voice. We don't editorialize here.
3. **Who is behind it**: named endorsers from the Official Voter Guide and reporting.
4. **Who is paying**: campaign finance totals from the Secretary of State / Cal-Access or reporting that cites them.

Rules:

- The card copy never says how to vote.
- A factual claim that the LAO or filings contradict gets flagged, not repeated as fact.
- If something isn't verified, the card says "not yet verified". It never guesses.
- Before a card goes live, a **second person** checks it against the Official Voter Guide (voterguide.sos.ca.gov) and the LAO analysis, then changes `status: "draft"` to `"verified"`. A banner shows in the app until every card is verified.
- Read each card once as a YES voter and once as a NO voter. If either side would call it unfair, fix the wording.

## Content

All election data lives in `js/data-ca-2026-general.js`. One object per prop. To add a new election, copy that file, change the `ELECTION` fields, and swap the `<script>` tag in `index.html`.

## Running locally

It's a static site with no build step:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploying

Any static host works (Netlify, Vercel, GitHub Pages, Cloudflare Pages). Point it at the repo root. There is no build command.

## Roadmap

- [ ] Verify all 14 cards against the Official Voter Guide and LAO
- [ ] Fill in missing campaign finance totals from the SoS contribution tracker
- [ ] Spanish version (then other languages the state guide ships in)
- [ ] Reading-level pass on every card
- [ ] Local measures by county
- [ ] Share link for a cheat sheet

## Fact-checking

`docs/fact-check-list.md` lists every factual claim in the app, numbered, with a sign-off line per prop. Regenerate it after editing the data (the script is in the project history) and check each claim against the primary source, not just an AI summary.

## Trust and safety checklist before launch

- Disclaimer on every screen: independent project, not affiliated with the state, any campaign, or any party.
- "Report a mistake" link: set `reportUrl` in the data file.
- Paraphrase sources. Don't copy news articles word for word; link to them.
- Every funding claim links to a source. Stick to amounts and names that appear in filings or reporting.
- Election dates and deadlines are checked against sos.ca.gov before every release.
- No tracking and no data collection. Answers stay in the voter's own browser.
