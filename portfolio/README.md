# Portfolio — Dave Ok

AI Developer & Creative Technologist — built for a Contra Labs application.

This is a production-quality, dependency-free static site. It is built entirely from real,
verifiable public work — six public GitHub repositories under github.com/daveok16-arch.

## 1. What was built

- One-page responsive portfolio (index.html \+ CSS \+ tiny JS\)
- Sections: Hero, Selected Work (4 projects), 2 Case Studies, AI Capabilities,
  Technical Capabilities, Research & Security, About, Contact
- Two real UI screenshots from the running Intent Security Workbench dev server
- SEO/OG metadata, canonical URL, favicon (SVG-free PNG set\), skip-link,
  keyboard focus states, reduced-motion support
- Zero runtime dependencies — loads in ~198 KB total (including images\)

## 2. Real projects featured

| Project | Repo | Why featured |
|---|---|---|---|
| Intent Security Workbench | https://github.com/daveok16-arch/Intent-Security-Workbench | Flagship:
  anti-fabrication security-research platform with SHA-256 evidence chain, 10-state finding
  FSM, real engine-availability checking, sandbox, React UI, 88-test Vitest suite |
| Virtual Football Engine +EV research | https://github.com/daveok16-arch/virtual-football | CDP WebSocket
  capture + pluggable engine seam + sample-size-gated validation that confirmed a real pricing
  edge (n=156 races, PASS, Wilson CIs\) and a live bot applying it |
| CHAMBERFX Pocket Option OTC bot | https://github.com/daveok16-arch/Chamberfx-pocket-option | Layered
  strategy → risk → execution trading infra, paper-by-default safety gates, 30-check risk
  smoke test, two critical review bugs found and fixed |
| AI/ML Forex Signals Bot | https://github.com/daveok16-arch/forex-signals-bot-v3 | 7-agent Python
  pipeline (data,training,signals,risk,backtest,execution,monitoring\, CI, Kaggle
  notebooks, integration validation suite |

## 3. Evidence used

- GitHub user profile and repo metadata (names, descriptions,,commit history\, languages\)
- Intent-Security-Workbench: cloned, `npm install --legacy-peer-deps`,
  `npm test` ran locally: 88 tests, 79 pass on a bare host;the 9 failures are
  semgrep/tree-sitter real-tool tests whose host binaries are truthfully reported
  NOT_INSTALLED (verified in the running dev server engine registry view\)
- Live screenshots captured from the running dev server (Chromium headless\)
- Virtual-football: exotic-bot.js/validator source quotes the confirmed edge values verbatim
- Pocket-option: HANDOFF.md (two critical bugs manifesto\, risk-smoke-test source
- Forex: README architecture, validate_pipeline.py, run.py
- CHAMBERFXp: data_ingestion.py, main.py, README

## 4. What you must personalize (placeholders in the page\)

| Field | Where |
|---|---|
| Email | Contact section `[your.email@example.com]` |
| LinkedIn (optional\| Contact `[linkedin.com/in/your-profile]` |
| Portfolio URL | Contact `[your deployed URL\]` — deploy to GitHub Pages first
| Hourly rate | Contact `[your rate]` |
| Availability / start date | Contact `[start date]` |
| Weekly availability | Contact `[hours/week]` |
| Name/brand | Header/hero say "Dave Ok" — adjust if your full name differs |
| OG image | assets/img/og-image.png — shows "PORTFOLIO" generic;
  optionally regenerate with your name |

> Note: GitHub username (daveok16-arch\) and GitHub URL are from the real GitHub account and can stay.
> The year in the footer auto-updates via JS.

## 5. Local development

```bash
cd portfolio
python3 -m http.server 8800
# open http://localhost:8800/
```

Any static server works. No build step is required.

## 6. Production build / deploy (GitHub Pages\)

```bash
cd portfolio
git init
git add .
git commit -m "Portfolio: AI Developer and Creative Technologist"
# push to a repo named <username>.github.io (recommended pace\)
git branch -M main
git remote add origin https://github.com/daveok16-arch/daveok16-arch.github.io.git
git push -u origin main
# then enable GitHub Pages in repo Settings → Pages → Source: Deploy from a branch → main → / (root\)
# Available at:
# https://daveok16-arch.github.io/
```

Alternative (project-repo Pages\): put these files in a repo (e.g. portfolio\), push, then in
Settings → Pages set source to main and folder /(root\). The site will live at
`https://daveok16-arch.github.io/<repo>/` — if you prefer that, update the canonical/OG URLs in index.html.

## 7. Final URL structure

- `https://daveok16-arch.github.io/` — homepage (if user-repo Pages\)
- `https://daveok16-arch.github.io/portfolio/` — homepage (if project-repo Pages\)
- Assets under /assets/css, /assets/js, /assets/img

## 8. Claims deliberately avoided (not verifiable\)

- No clients, employers, revenue, awards, testimonials, or bounties claimed
- No "years of experience" or senior titles
- No fake stats — the 79/88 test figure is reported with its honest caveat
- No wallet-signing / ERC-20 approval research claim: searched all public repos — no such evidence exists,
  so it was not included
- No live-deployment claims: Render URLs probed return 404 — linked repos only
- No prediction-accuracy claims for any trading bot:paper-trading defaults and disclaimers preserved
- No stock photos, client logos, or generic AI-marketing language

## 9. Final QA report

| Check | Result |
|---|---|
| Desktop layout (1440x1200\)| Pass — dark theme, 2-col work grid, case-study screenshots render |
| Mobile layout (390x900\)| Pass — single column, no horizontal overflow, section bands verified via pixel probe |
| Links | 5/5 external GitHub links 200 (HEAD\, all internal anchors resolve (0 missing\)|
| Images | all referenced assets 200 and exist (2 case screenshots + OG + favicon\)|
| Console errors | none from page JS (only headless-Chromium GPU noise in stderr\)|
| Accessibility | 1 h1, logical heading order, alt+width+height on imgs, skip-link, aria labels, focus-visible, reduced-motion, lang/viewport set |
| Performance | ~198 KB total, zero dependencies, no external fonts/CDNs, all images lazy-loaded above fold |
| HTML validity | tag balance clean (custom parser\); canonical + OG absolute URLs set |

## 10. Recommended 30-second Contra Labs intro-video script

> (60–90 wpm → ~85–110 words for 30 s\)

```
Hi, I am Dave Ok — an AI developer and creative technologist.

I work in the open. My flagship project is the Intent Security Workbench: a
modular security-research platform where findings cannot be faked — every artifact is
hash-chained, engines truthfully report what they cannot run, and a strict state machine
blocks a finding from being confirmed without evidence. I built its 88-test suite myself.

I also do browser automation. I intercepted a sportsbook WebSocket via Chrome
DevTools Protocol, then proved whether a betting edge was real before trusting it: a
sample-size-gated validation across 156 races with 95% confidence intervals — PASS.

That is the pattern I bring to every project: investigate systematically, build real
tooling, verify with evidence, and communicate what I found clearly. I work deeply with
AI agents as collaborators, review their output critically, and ship results you can inspect
on GitHub. Thanks for watching.
```

## 11. Repository layout

```
portfolio/
  index.html            # single-page site
  assets/css/style.css   # design system, responsive
  assets/js/main.js       # nav toggle, year
  assets/img/             # case-study screenshots + OG image
  favicon*.png            # favicon set
  README.md              # this file
```
