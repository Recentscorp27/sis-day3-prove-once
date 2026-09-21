# Soft CLEAR Ready — Upload SAMPLE-out + Packet SoT prove pack (public)

**Portal tip:** `1d72f38`  
**Prove pack:** `96062b5`  
**Base:** ClaimClimbers/sis-day3-dogfood main `ea02a96` / #23  
**PR:** ClaimClimbers/sis-day3-dogfood #24  

Public pack so Design can open Soft CLEAR Ready without ClaimClimbers SSO.  
Soft Clinic · Letters OUT · CASE-001 / CASE-002 / CASE-006 fixtures stay.  
No PHI invented. Fixture SoT internals not republished here.

Soft CLEAR Ready Design Soft CLEAR PASS bar unchanged (Ready + Care Talk SAMPLE-out chrome from `ea02a96` stands). Sample Ortho / Sample Imaging not renamed.

## Upload FAIL strings (gone on 01)

- `SAMPLE only`
- `Already in this SAMPLE`
- `SAMPLE desk`

**Result:** none of the three on 01.

## Packet / iOS SoT

- CASE-002 EX-006: **3994 bytes** / `6cd9beae…` (iOS #16)
- Claimant Ready: **no sha256Short** (02 sha matches #23 phone Ready `de2240de…`)
- CASE-002 Pages: Clinic statement form · Dated 2026-07-16 · no hash

## PNGs

Real PNG magic `89 50 4E 47 0D 0A 1A 0A`. Not HTML renamed.

| File | Viewport | sha256 |
| --- | --- | --- |
| `01-upload-no-sample.png` | 1280×1180 CASE-001 Upload | `7d11322639bcfc0926732229bc1034e8048355a345c8076fc30b7c5bc0716a4c` |
| `02-ready-no-hash.png` | 390×844 CASE-001 Ready | `de2240dec2939107d235384385d677c68d363e44099143bb9a09ed862aef6017` |
| `03-case-002-pages.png` | 1280×1120 CASE-002 Pages | `6799a09540e91103afa16431f3eae8da50ca9713a3c1404b218192d14e813d48` |
