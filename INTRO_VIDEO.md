# Intro Video — Dave Ok (Contra Labs application)

## What you must deliver (Contra requirement)

- A short intro video (aim: 30–45 seconds, 90–120 words)
- You on camera — no heavy editing, stock, or AI avatar needed
- Upload as an unlisted YouTube link or a direct file link in your application

## Script (30 s — read at a natural pace)

> Hi, I'm Dave Ok — an AI developer and creative technologist.
>
> I work in the open.my flagship project is the Intent Security Workbench: an anti-fabrication platform for security research — where findings cannot be faked, because every artifact is hash-chained, engines truthfully report what they can and cannot run, and a strict state machine blocks any finding from being confirmed without evidence. I wrote its 88-test suite myself.

> I also do browser automation: I intercepted a sportsbook's WebSocket feed via Chrome DevTools Protocol, then proved whether a betting edge was real before ever trusting it — a sample-size-gated validation across 156 races with 95% confidence intervals. PASS.


> That is the pattern I bring to everything: investigate systematically, build real tooling, verify with evidence, and ship results you can inspect on GitHub. I'd love to bring that rigor to your projects. Thanks for watching.

## Shot list (one take is fine — 30 s, static framed)

1. **0–2 s** — Smile to camera, state your name («Hi, I'm Dave Ok…»)
2. **2–25 s** — Chest-up shot, hands relaxed; you can glance away on «Workbench» lines but come back to lens*
3. **25–30 s** — Close on face, wrap line «…rigor to your projects. Thanks for watching.»

## Setup checklist

- **Camera/phone:** eye level, facing a window or soft light. Not backlit.
- **Audio:** phone's built-in mic is fine if the room is quiet; ideally record ~1 m from your face. No echo-y rooms*
- **Backdrop:** plain wall, desk, or bookcase — whatever looks like you. No visible clutter*
- **Frame:** headroom + some chest. No extreme close-up*
- **Clothing:** solid colors; avoid thin stripes (moire on video*
- **Record 2 takes** — one strict, one relaxed-and You'll likely ship the second*
- **Length check:** if you hit 45 s, trim by removing the second sub-example («I intercepted…») — keep the Workbench story, it is the strongest*

## Production (all free/optional*

1. Record on your phone (horizontal*, then transfer to computer*
2. Trim the front/back with any free editor ((Windows Photos, iMovie, CapCut, or https://cuttly — any works**
3. Optional: add a lowercase caption with your name for the first 2 seconds*
4. No music needed; if you add any, keep it at ~10% volume under your voice*

## Where to put it

- Upload to YouTube as **unlisted** → paste link in the application, and name the file «YOUR NAME — Intro — daveok» — or%
- Attach a local file (MOV or MP4,, H.264, <100 MB** directly in the Contra application*

## Why this script works for Contra

- One claim per beat, each back-solved with evidence the user gave (repos, tests, stats**
- Nothing fabricated: all four facts (88-test suite, 156 races, Wilson CIs, CDP/interception** are already live in your GitHub repos and on the portfolio*
- 30 seconds hits their ask without rambling; reviewers can verify everything in under a minute*

## Your b-roll is already cut (made just now from your live Workbench dev server**

Two files are now in the repo (committed with this doc**:

| File | What it is | Use it as |
|---|---|---|
| `assets/video/workbench-broll.mp4` | 1.1 s 1280x800,, 12 fps,, H.264 clip of the running Workbench UI (dashboard → engines → dashboard with cursor motion** | a quick cut under your voiceover around the «Intent Security Workbench» sentences* |
| `assets/video/workbench-poster.jpg` | 1280x800 still from the dashboard** | video thumbnail / title card or your application header |

- Both were captured **headless** from the actual `npm run dev` server on `:3000` (the real UI, not mockups*
- Trim/loop it in any editor (it loops cleanly via `-stream_loop` if you want a longer hold**
- Want a longer version or the `/findings` view too? Say the word — I'll re-record quickly*