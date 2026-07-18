# Petits Mots 🦜

Picture-and-sound French flashcards for little kids, with real spaced repetition under the hood.

**Live app:** https://benjamin22-314.github.io/spaced-repetition-learning/

Built for little kids learning their first French words: big tappable cards, a picture on the front, and the word spoken out loud in French — no reading required. A grown-up holds the phone and taps "Got it!" or "Again".

## Features

- 🇫🇷 **Starter deck of 30 French words** (animals, colours, numbers, food, everyday things) plus **simple sentences** ("Je m'appelle Amy", "J'aime manger des chips", …) using emoji as pictures — works out of the box. The deck lives in [`cards.js`](cards.js) and installed phones sync to it on every launch (see "Editing the deck" below).
- 🔊 **Speaks every word** with the device's French voice (`speechSynthesis`, `fr-FR`).
- 🎙️ **Record your own voice** for any card — Mum's pronunciation beats the robot. Recordings are stored on-device.
- 📷 **Custom cards with photos**: snap a picture, it's downscaled to ≤1000px JPEG before storing. Add words in any language, not just French.
- 📦 **Leitner spaced repetition**: 5 boxes with 0/1/2/4/7-day intervals. "Got it" moves a card up a box; "Again" sends it back to box 1 and re-queues it once in the same session.
- 🌟 **Kid-friendly reward loop**: stars for every correct card, confetti at the end of a session, and a "practice for fun" mode when nothing is due (practice doesn't affect scheduling).
- 👨‍👩‍👧 **Grown-up corner** behind a hold-to-enter gate (1.2s press): manage cards, see the box distribution, test the voice, reset progress (with confirmation).
- 📲 **Installable PWA**: "Add to phone" button (native prompt on Android/desktop, illustrated Share → Add to Home Screen steps on iOS). Fully offline once installed.

## Editing the deck

All built-in cards live in one self-describing file: [`cards.js`](cards.js). The workflow for adding cards is deliberately LLM-friendly:

1. Paste the whole of `cards.js` into any LLM chat and ask for what you want ("add ten words about the beach in the same format").
2. Replace the file with the output, then sanity-check it before committing: `node --check cards.js` (catches syntax errors — a broken file fails soft in the app, but new cards won't arrive until it's fixed). Also make sure no two cards share the same `k`.
3. Each phone reconciles on its next launch — no version numbers to bump (the service-worker cache serves the old file while fetching the new one, so it can take two launches to appear).

Sync rules: new keys are added, removed keys are deleted, and changed `w`/`h`/`e` values update in place while the card's learning progress is kept. Cards created inside the app are never touched; deck cards edited in-app keep the parent's version; deck cards deleted in-app stay deleted (tombstoned). The card format and full rules are documented in the header of `cards.js` itself.

## Tech notes

- **Zero-dependency PWA**: a single `index.html` with inline CSS/JS. No build step, no frameworks, no CDNs — works fully offline.
- **Storage**: everything lives on-device in IndexedDB (cards, photo blobs, audio blobs, stars). `navigator.storage.persist()` is requested on boot. No accounts, no sync — data is per-device and lost if the app is uninstalled.
- **Service worker** (`sw.js`): precaches the app shell, cache-first with background refresh. Cache name is versioned (`petits-mots-vN`) — **bump it on every deploy** so installed phones pick up changes.
- **All paths relative** (`./…`) because the app is served from a GitHub Pages subpath.
- **iOS quirks handled**: speech synthesis primed on a user gesture, `MediaRecorder` mime-type detection (`audio/mp4` on Safari), `crypto.randomUUID` fallback, no nested buttons, safe-area insets.
- Icons are real PNGs (192/512/maskable + 180 apple-touch-icon) generated with a PowerShell System.Drawing script.

## Scheduling details

Each card sits in a Leitner box 1–5 with review intervals of 0, 1, 2, 4 and 7 days. Sessions serve up to 8 due cards (missed cards repeat once at the end). Box names shown to parents: New → Learning → Growing → Strong → Star.
