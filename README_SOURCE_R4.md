# Ticket Triage™ — Source / Method Notes

**Product SemVer:** 1.1.0

Ticket Triage demonstrates a narrow trust principle: deterministic automation should expose why it decided something and refuse to pretend certainty where the rule evidence is insufficient or contradictory.

## What this is
A dependency-free browser application with an inspectable deterministic rule engine for synthetic support-ticket triage.

## What this is not
It is not an AI classifier, helpdesk integration, security incident response platform, legal/compliance tool, SLA engine, customer-data processor, or autonomous ticketing agent.

## Decision contract
1. Normalize the submitted ticket text.
2. Evaluate each frozen category rule against its explicit signal phrases.
3. If exactly one category rule matches, return `RESOLVED` with category, severity, stable rule ID, reason, and matched signals.
4. If no rule matches, more than one category matches, or the input is empty, return `REVIEW` with an explicit reason.
5. The same input and same rule set must always produce the same output.

## Public rules
- `TT-001` ACCESS / HIGH
- `TT-002` BILLING / HIGH
- `TT-003` OUTAGE / CRITICAL
- `TT-004` SECURITY / CRITICAL
- `TT-005` BUG / MEDIUM
- `TT-006` REQUEST / LOW

The UI includes a Rule Inspector so the public can inspect the exact signal set and reason text.

## Data and network
Decision history is stored only in browser `localStorage`. There are no fetch/XHR/WebSocket/service-worker analytics or remote dependencies. JSON export is generated locally.

## Measured producer evidence
The public deterministic harness checks every category rule, empty input, unmatched input, multi-category conflict, determinism, rule identity stability, export shape, and no-network source constraints. Producer assurance for the final locked package additionally covers source census, parity/improvement reconciliation, mutation/negative controls, recovery, packaging, and fresh zero-new-material sweeps before Fresh IQA.

## UBuildOS value
The product makes uncertainty visible instead of hiding it. The build process follows the same idea: no lifecycle claim outruns the exact evidence that supports it.
