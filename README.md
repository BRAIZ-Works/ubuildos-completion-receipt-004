# Ticket Triage™

**UBuildOS™ 30-Day Public Campaign — Day 03 / P01**  
**Public package:** v1.1.0  
**Theme:** TRUST THROUGH UNCERTAINTY

Ticket Triage™ is a dependency-free browser tool that applies a small, inspectable rule set to synthetic support tickets. It shows the matched rule, category, severity, reason, and evidence signals—and returns **REVIEW** instead of inventing certainty when the evidence is empty, unmatched, or conflicting.

## Run it
Open `index.html` in a modern browser.

## What improved from the earlier Day-03 candidate
- Day-02-equivalent public release surface: runnable product, public README, START_HERE, source README, proof visuals, and inspectable source.
- Rule Inspector exposes the exact decision rules.
- Decision history is local-only and exportable as JSON.
- Sample tickets demonstrate resolved, ambiguous, unmatched, and critical cases.
- Explicit matched-signal evidence accompanies every resolved decision.
- Built-in deterministic self-test and separate Node test harness.
- Stronger public limitation language and no-network/privacy boundary.

## Storage and network behavior
- Decision history persists only in browser `localStorage`.
- The application makes no network calls.
- It performs no external writes: it does not send messages, update tickets, write external systems, authenticate users, or perform autonomous external actions.
- Included examples are synthetic/public-demo data.

## Public proof
- `ticket-triage-screenshot.svg` — product preview showing an explicit resolved decision.
- `decision-flow.svg` — rule → evidence → decision / REVIEW proof graphic.
- `tests.js` — deterministic public test harness.

## Core trust rule
A ticket is **RESOLVED** only when exactly one category rule matches. Zero matches, conflicting category matches, or empty input return **REVIEW**.

## Verification status
This repository is the intended public projection of the Day-03 terminal successor. Publication/freeze/closeout status must be taken from the final lifecycle receipt, not inferred from repository possession alone.
