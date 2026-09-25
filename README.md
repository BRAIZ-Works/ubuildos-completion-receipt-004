# Ticket Triage™

**UBuildOS™ 30-Day Public Campaign — Day 03 / P01**  
**Product SemVer:** 1.1.0  
**Public-package SemVer:** 1.1.1  
**Frozen R4 review subject:** `REVIEW_SUBJECT.zip`  
**Frozen review-subject SHA-256:** `39bc44173821df2fc4286d4d8804d46e1d4dc77721c6ca4aff1fd481690a0756`  
**Frozen subject-root SHA-256:** `eee6ac1749fe6ff1d019104c1ce3b40f17d1d6a5d154e58d370145cc4a753b88`

Ticket Triage™ is a dependency-free browser tool that applies a small, inspectable rule set to synthetic support tickets. It exposes the matched rule, category, severity, reason, and evidence signals. When evidence is empty, unmatched, or conflicting, it returns **REVIEW** instead of manufacturing certainty.

## Run it
Open `index.html` in a modern browser.

## Storage and network behavior
- Decision history persists only in browser `localStorage`.
- The application makes no network calls.
- It performs no external writes.
- Included examples are synthetic/public-demo data.

## Public proof
- `ticket-triage-screenshot.png` — product proof image.
- `decision-flow.png` — deterministic decision/REVIEW proof graphic.
- `LINKEDIN_CAROUSEL.pdf` — five-page LinkedIn document.
- `LINKEDIN_CAROUSEL.md` — editable publication source.
- `tests.js` — deterministic public test harness.

## Core trust rule
A ticket is **RESOLVED** only when exactly one category rule matches. Zero matches, conflicting category matches, or empty input return **REVIEW**.

## Verification status
The exact R4 review subject completed producer qualification, Fresh Independent IQA PASS, post-IQA reconciliation, owner acceptance, and exact-byte freeze before this publication projection was finalized.

Fresh IQA transport SHA-256: `151c7d90f75a50720d2cad0cfafd4b4179eee07c1e6d288650bf75b92df6a2f4`.

This public package is a presentation/distribution projection. It does **not** modify the frozen R4 product bytes.

Public repository: https://github.com/BRAIZ-Works/ubuildos-completion-receipt-004

Live app: https://braiz-works.github.io/ubuildos-completion-receipt-004/
