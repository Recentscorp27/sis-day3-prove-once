# Soft CLEAR Ready — SAMPLE-out prove pack (public)

**Portal tip:** `5f84300` (`5f84300153fa125eb11040683750acb7ea531594`)  
**Face remint:** `cf7e24d`  
**Base:** ClaimClimbers/sis-day3-dogfood main `6c0f195` / #21 `ac80dd7`  
**PR:** ClaimClimbers/sis-day3-dogfood #23  

Public pack so Design can open Soft CLEAR Ready without ClaimClimbers SSO.  
Soft Clinic · Letters OUT · CASE-001 / CASE-002 / CASE-006 fixtures stay.  
No PHI invented. Fixture SoT / `sample-sot.js` internals not republished here.

## Care Talk Soft CLEAR Ready strings

- Pill: `Talk with Care`
- Bubbles: `Care` / `You`
- Status: `Conversation on your desk. Continue when you want the live talk.`
- About packet word: `this packet`
- No `.sample-mark` node; leftover class locked `display:none`
- Title: `Talk with Care. Security in Social` (no `(SAMPLE)`)

Ready Soft Clinic: SAMPLE chips/badges/watermarks/body labels out. Teach-first H1 **Not ready to release.** Letters OUT · no letter button.

## PNGs

Real PNG magic `89 50 4E 47 0D 0A 1A 0A`. Not HTML renamed.

| File | Size | sha256 |
| --- | --- | --- |
| `01-ready-phone-no-sample.png` | 390×844 | `de2240dec2939107d235384385d677c68d363e44099143bb9a09ed862aef6017` |
| `02-care-talk-no-sample.png` | 430×900 | `64334918059a66d5252478fba43dee5221fbb7ae84d4011a99e5fea6e3d5be14` |
| `03-desk-ready-no-sample.png` | 1280×800 | `b0622a8dbb29c8e04c03a7d19be74a79add9fcd539a396ce5a5601fec690d036` |

## tip-html/

Face files from Portal tip `5f84300`:

- `index.html` — desk Ready
- `care-talk/index.html` — Care Talk conversation UI
- `care-talk/about-boot.js` — paints thread (Care/You, Talk with Care pill)
- `css/tokens.css` · `css/desk.css` · `css/desk-live.css` — Soft Clinic tokens

Care Talk stylesheet hrefs in this pack are relative (`../css/`) so Design can open the folder. Copy is otherwise the tip face. `sample-sot.js` fixture harness is not in this pack.
