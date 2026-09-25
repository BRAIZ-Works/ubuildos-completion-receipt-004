# Ticket Triage™ — Source / Method Notes

**Product SemVer:** 1.1.0  
**Public-package SemVer:** 1.1.1  
**Frozen R4 review-subject SHA-256:** `39bc44173821df2fc4286d4d8804d46e1d4dc77721c6ca4aff1fd481690a0756`

Ticket Triage demonstrates a narrow trust principle: deterministic automation should expose why it decided something and refuse to pretend certainty where rule evidence is insufficient or contradictory.

## What this is
A dependency-free browser application with an inspectable deterministic rule engine for synthetic support-ticket triage.

## What this is not
It is not an AI classifier, helpdesk integration, security incident response platform, legal/compliance tool, SLA engine, customer-data processor, or autonomous ticketing agent.

## Decision contract
1. Normalize submitted ticket text.
2. Evaluate each frozen category rule against explicit signal phrases.
3. Exactly one category match -> `RESOLVED` with category, severity, stable rule ID, reason, and matched signals.
4. Zero matches, multiple category matches, or empty input -> `REVIEW` with an explicit reason.
5. Same input + same rules -> same output.

## Public rules
- `TT-001` ACCESS / HIGH
- `TT-002` BILLING / HIGH
- `TT-003` OUTAGE / CRITICAL
- `TT-004` SECURITY / CRITICAL
- `TT-005` BUG / MEDIUM
- `TT-006` REQUEST / LOW

## Data and network
Decision history is stored only in browser `localStorage`. There are no fetch/XHR/WebSocket/service-worker analytics or remote dependencies. JSON export is generated locally.

## Measured evidence
The deterministic public harness covers every category rule, empty input, unmatched input, multi-category conflict, determinism, rule identity stability, export shape, and no-network source constraints. Producer assurance additionally covered parity/improvement reconciliation, negative controls, recovery, packaging, and fresh zero-new-material sweeps before Fresh IQA.

## Publication projection
The public package adds distribution assets and publication metadata only. Frozen R4 product bytes remain unchanged. The LinkedIn document uses the same Day-03 objective, proof, CTA, and explicit uncertainty contract as the frozen product.
