# START HERE — Ticket Triage™ v1.1.0

1. Open `index.html` in a modern browser.
2. Choose a synthetic sample or enter synthetic ticket text.
3. Select **Triage ticket**.
4. Inspect `STATE`, `CATEGORY`, `SEVERITY`, `RULE ID`, `MATCHED SIGNALS`, and `REASON`.
5. Open **Rule Inspector** to inspect the deterministic rules.
6. Try `charged twice and service down for all users` — the result must be **REVIEW**.
7. Use **Export history** for a local JSON export.

Data stays in browser `localStorage`. The product makes no network calls and performs no external writes.

## Public proof
- Product proof: `ticket-triage-screenshot.png`
- Decision proof: `decision-flow.png`
- LinkedIn document: `LINKEDIN_CAROUSEL.pdf`
- Public URL: https://github.com/BRAIZ-Works/ubuildos-completion-receipt-004
