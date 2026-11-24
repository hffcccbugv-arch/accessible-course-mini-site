# Defect log (real defects found while testing; before and after)

| ID | Defect | Found by | Before | After | Status |
|---|---|---|---|---|---|
| D1 | Phone pattern accepted letters-only input and values longer than 20 characters (B17, I3, I4; B14 for 6 digits) | Test cases on the original live copy (raw-before-original-phone-cases.json) | 4 cases wrongly accepted | All blocked; valid numbers accepted in Chrome and Firefox | Fixed and retested |
| D2 | Hero eyebrow text contrast 4.13:1 (needs 4.5) | contrast script | #8ccaff | #b3dbff, about 4.99:1 | Fixed and re-measured |
| D3 | Invalid submit showed no page message; the first attempt to add one never ran because browsers do not fire the submit event on an invalid form | Keyboard/submit test: status text stayed empty in Chrome and Firefox | Empty status | Status message shown (both browsers); no POST sent | Fixed and retested |
| D4 | Missing favicon caused a console 404 on every page | Console capture | 404 | Icon link added; console empty | Fixed |
| D5 | Radios and checkboxes used wrapping labels only; footer and time markup not semantic | HTML audit | n/a | Explicit for/id labels, time elements | Changed |
| D6 | Decorative staff image had descriptive alt | HTML audit | alt text read out | alt="" | Changed |
| D7 | Local server printed submitted personal values and listened on all interfaces | Code read | Values logged | Names and lengths only, 127.0.0.1, 10 kB cap | Changed |
| D8 | Secondary button border (1.31:1) and fieldset border (1.53:1) below 3:1 | contrast table | #c7d2e2 | #66789a (3.82 on fill) and #7a8bab (3.44) | Fixed and re-measured |

Not defects but still open: screen reader testing was not run.
