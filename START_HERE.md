# START HERE — Ticket Triage™ v1.1.0

1. Open `index.html` in a modern browser.
2. Choose a synthetic sample or enter your own synthetic ticket description.
3. Select **Triage ticket**.
4. Inspect `STATE`, `CATEGORY`, `SEVERITY`, `RULE ID`, `MATCHED SIGNALS`, and `REASON`.
5. Open **Rule Inspector** to see the exact deterministic rules.
6. Try an ambiguous ticket such as `charged twice and service down for all users` — the tool must return **REVIEW**.
7. Use **Export history** to generate a local JSON file of the current decision history.

Decision history stays in browser `localStorage`. The product makes no network calls and performs no external writes.
