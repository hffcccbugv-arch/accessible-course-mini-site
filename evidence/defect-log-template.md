# Defect log

All entries below were found when the site was checked by an AI assistant on 24 Nov 2026 and fixed in this copy. Record in your own words what you saw when you repeat the test.

| ID | Page | Problem found | Steps to reproduce | Fix applied | Retest result |
|---|---|---|---|---|---|
| D-01 | register.html | Phone `pattern` was ignored in current Chrome: `[0-9+() -]{7,20}` is an invalid expression in Chrome's strict mode, so letters and short values passed. | Type `12` in the phone field and run `validity.valid`. | Pattern changed to `[0-9+\(\) \-]{7,20}`. | `12` and `abcdefghij` now blocked ("Please match the requested format"); `+201001234567` and `(02) 123-4567` accepted. Chrome only. |
| D-02 | register.html | Radios and checkboxes had no `for`/`id` pair. | Inspect the labels. | Added matching `id` and `for` to all six. | Inspected in the source. |
| D-03 | register.html | Empty status paragraph (`role="status"`) showed as an empty blue bar. | Open the page; look under the buttons. | `.status-message:empty { display: none; }`. | Bar gone in screenshot. |
| D-04 | schedule.html | On a 390 px screen the table scrolls sideways in a wrapper that keyboard users could not reach. | Open at 390 px, press Tab. | Wrapper has `tabindex="0"`, `role="region"` and a label. | Wrapper now appears in the Tab order (Chrome). |
| D-05 | all pages | The amber focus ring was 1.64:1 against white cards. | Colour calculation from the CSS. | Navy 3 px outline plus amber ring (navy is 14.1:1 on white). | Screenshot of focus on the form. |
| D-06 | all pages | Skip link moved the hash but main was not focusable. | Tab, Enter on the skip link, read the focused element. | Added `tabindex="-1"` to main. | Focus lands on `main#main-content`. |
| D-07 | index, staff, schedule, register | No `<time>`, no nested list, no `<abbr>`, `<cite>` or `<em>`, decorative staff image had a long alt. | Search the source. | Added them (see CHANGES.md). | Validator: 0 errors, 0 warnings. |
