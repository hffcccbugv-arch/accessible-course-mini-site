# Contrast table

Method: a script read the computed foreground and background colours of every text element in Chrome, then applied the WCAG 2.x relative-luminance formula. Gradients were checked at their worst stop. Thresholds: 4.5:1 normal text, 3:1 large text (24 px, or 18.66 px bold). This is a computed check, not a reading from an interactive tool such as a browser extension. Text over images was not present.

| Element | Sample text | Foreground | Background | Size px | Ratio | Needed | Result | Pages |
|---|---|---|---|---|---|---|---|---|
| p.eyebrow | COURSE MINI-SITE | #b3dbff | gradient #102a56 to #0756a8 (worst stop #0756a8) | 12.48 | 4.99 | 4.5 | Pass | index |
| p.lead | A practical course covering th | #e8f3ff | gradient #102a56 to #0756a8 (worst stop #0756a8) | 17.92 | 6.43 | 4.5 | Pass | index |
| p.eyebrow | PEOPLE | #0756a8 | #f4f7fb | 12.48 | 6.73 | 4.5 | Pass | register,schedule,staff |
| h1 | Web Design & Development | #ffffff | gradient #102a56 to #0756a8 (worst stop #0756a8) | 57.6 | 7.23 | 3 | Pass | index |
| dd | Web technologies | #42516b | #edf4fc | 16 | 7.23 | 4.5 | Pass | index |
| p | . | #42516b | #edf4fc | 16 | 7.23 | 4.5 | Pass | index,staff |
| p.lead | Meet the instructor and teachi | #42516b | #f4f7fb | 17.92 | 7.46 | 4.5 | Pass | register,schedule,staff |
| span | & | #83c5ff | #102a56 | 23.2 | 7.66 | 3 | Pass | index,register,schedule,staff |
| p | Web Design & Development intro | #42516b | #ffffff | 16 | 8.01 | 4.5 | Pass | index,register,schedule,staff |
| abbr | HTML | #42516b | #ffffff | 16 | 8.01 | 4.5 | Pass | index |
| figcaption | A course project moves from pa | #42516b | #ffffff | 14.72 | 8.01 | 4.5 | Pass | index,staff |
| strong | Role: | #42516b | #ffffff | 16 | 8.01 | 4.5 | Pass | staff |
| time | 11:00 AM | #42516b | #ffffff | 16 | 8.01 | 4.5 | Pass | register,staff |
| dd | Organising topics, learning ou | #42516b | #ffffff | 16 | 8.01 | 4.5 | Pass | staff |
| p.note | Times and teaching-team names  | #42516b | #ffffff | 16 | 8.01 | 4.5 | Pass | schedule |
| em | must | #42516b | #ffffff | 16 | 8.01 | 4.5 | Pass | register |
| small | 2 to 60 characters. | #42516b | #ffffff | 13.12 | 8.01 | 4.5 | Pass | register |
| p.fieldset-hint | Choose one preferred learning  | #42516b | #ffffff | 16 | 8.01 | 4.5 | Pass | register |
| a | Home | #ffffff | #244675 | 16 | 9.51 | 4.5 | Pass | index,register,schedule,staff |
| a | Meet the course staff | #063d79 | #edf4fc | 16 | 9.71 | 4.5 | Pass | index,staff |
| cite | Learn web development | #063d79 | #edf4fc | 16 | 9.71 | 4.5 | Pass | index |
| a.button-link | Register for the course | #063d79 | #ffffff | 16 | 10.76 | 4.5 | Pass | index |
| a | Register using the student reg | #063d79 | #ffffff | 16 | 10.76 | 4.5 | Pass | schedule |
| button.primary-button | Submit registration | #ffffff | #063d79 | 16 | 10.76 | 4.5 | Pass | register |
| a | Return to the course home page | #b9ddff | #0b1d3a | 16 | 11.87 | 4.5 | Pass | index,register,schedule,staff |
| th | Day | #14213d | #dceafa | 16 | 13.08 | 4.5 | Pass | schedule |
| button.secondary-button | Reset form | #14213d | #e8eef7 | 16 | 13.69 | 4.5 | Pass | register |
| a.brand | WD | #ffffff | #102a56 | 23.2 | 14.12 | 3 | Pass | index,register,schedule,staff |
| a | Course staff | #ffffff | #102a56 | 16 | 14.12 | 4.5 | Pass | index,register,schedule,staff |
| h2 | Quick information | #14213d | #edf4fc | 20.8 | 14.41 | 3 | Pass | index,staff |
| dt | Course area | #14213d | #edf4fc | 16 | 14.41 | 4.5 | Pass | index |
| h3 | Useful pages | #14213d | #edf4fc | 17.92 | 14.41 | 4.5 | Pass | index,staff |
| li | Include the page name. | #14213d | #edf4fc | 16 | 14.41 | 4.5 | Pass | staff |
| th | Sunday | #14213d | #edf4fc | 16 | 14.41 | 4.5 | Pass | schedule |
| h1 | Course staff | #14213d | #f4f7fb | 57.6 | 14.87 | 3 | Pass | register,schedule,staff |
| p | Web Design & Development — Cou | #eaf2fc | #0b1d3a | 16 | 14.87 | 4.5 | Pass | index,register,schedule,staff |
| time | 2026 | #eaf2fc | #0b1d3a | 16 | 14.87 | 4.5 | Pass | index,register,schedule,staff |
| a.skip-link | Skip to main content | #14213d | #ffffff | 16 | 15.97 | 4.5 | Pass | index,register,schedule,staff |
| h2 | About this course | #14213d | #ffffff | 24.8 | 15.97 | 3 | Pass | index,register,schedule,staff |
| li | Explain the basic structure of | #14213d | #ffffff | 16 | 15.97 | 4.5 | Pass | index,schedule |
| time | 11:00 AM | #14213d | #ffffff | 16 | 15.97 | 4.5 | Pass | index,schedule |
| h3 | Dr. Hend Shaaban | #14213d | #ffffff | 17.92 | 15.97 | 4.5 | Pass | staff |
| dt | Course planning | #14213d | #ffffff | 16 | 15.97 | 4.5 | Pass | staff |
| caption | Weekly Web Design & Developmen | #14213d | #ffffff | 16 | 15.97 | 4.5 | Pass | schedule |
| td | – | #14213d | #ffffff | 16 | 15.97 | 4.5 | Pass | schedule |
| legend | Student details | #14213d | #ffffff | 16 | 15.97 | 4.5 | Pass | register |
| label | Full name (required) | #14213d | #ffffff | 16 | 15.97 | 4.5 | Pass | register |

## Non-text contrast (WCAG 1.4.11, needs 3:1), computed with the same formula

| Component | Colours | Ratio | Needed | Result |
|---|---|---|---|---|
| Text input border | #66789a on #ffffff | 4.45 | 3 | Pass |
| Text input border | #66789a on page #f4f7fb | 4.14 | 3 | Pass |
| Focus ring, navy outline | #102a56 on #ffffff | 14.12 | 3 | Pass |
| Focus ring, amber outer shadow | #ffbf47 on #ffffff | 1.64 | 3 | Not relied on: the navy outline carries the indicator alone |
| Placeholder text | #757575 on #ffffff | 4.61 | 4.5 | Pass |
| Fieldset border (changed from #c7d2e2, 1.53) | #7a8bab on #ffffff | 3.44 | 3 | Pass after fix |
| Secondary button border (changed from #c7d2e2, 1.31 on its fill) | #66789a on its fill #e8eef7 | 3.82 | 3 | Pass after fix |
| Secondary button border against page | #66789a on #f4f7fb | 4.14 | 3 | Pass after fix |
| Radio and checkbox border (native control) | measured from a 4x screenshot of each control (screenshots/ctl_fmt-online.png, ctl_topic-css.png): darkest border pixel rgb(118,118,118) on #ffffff | 4.54 | 3 | Pass (measured by pixel sampling) |

## Hover, active and disabled states (measured through real mouse events, raw-hover-active-states.json and raw-chrome-run.json)

| Element | Rest background | Hover | Active | Text on hover |
|---|---|---|---|---|
| Primary button (Submit) | rgb(6,61,121) | rgb(16,42,86) | rgb(16,42,86) | white, passes |
| Secondary buttons (Reset, Show help) | rgb(232,238,247) | rgb(220,231,245) | rgb(220,231,245) | dark #14213d, passes |
| Navigation link | transparent | rgb(36,70,117) | rgb(36,70,117) | white, passes |
| Button link | white | rgb(232,241,252) | rgb(232,241,252) | navy, passes |

Disabled state: the site has no disabled controls, so none is defined or tested.

## Defects found by this table

1. Hero eyebrow text was #8ccaff on the gradient end: 4.13:1 (needs 4.5). Changed to #b3dbff, re-measured, about 4.99:1.
2. Fieldset border 1.53:1 and secondary button border 1.31:1 on their fill (needs 3:1 for control boundaries). Darkened to #7a8bab and #66789a, re-measured above.
