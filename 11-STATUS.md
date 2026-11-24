# Requirement status (rubric sections 1 to 9, as supplied by the student)

The rubric text is the student's own message; it was not independently verified as the instructor's wording. Status words: Completed / Partially Completed / Not Completed.

| Item | Status | Basis |
|---|---|---|
| 1.1 Semantic elements, identical header/nav/footer | Completed | header, nav, main, aside, footer on content pages; header (aria-current removed) and footer hashes identical on all 4 pages |
| 1.2 Learning Outcomes nested list kept | Completed | Nested list under outcome 5, Nu validator 0 messages |
| 1.3 time datetime for every calendar date | Completed | The only calendar dates are the footer year and the registration window; both use time with ISO values. Weekdays have no valid datetime and stay plain text |
| 1.4 abbr, cite, em in natural context | Completed | abbr (HTML, CSS), cite (MDN title), em in register.html; no forced use |
| 1.5 figure alt and figcaption | Completed | Informational image has descriptive alt; decorative staff image alt=""; captions add different context |
| 1.6 At least 8 links, 5 types, clear names | Completed | index.html and staff.html: internal, anchor (skip link and #main-content), external (MDN), download (TXT), mailto. The mailto address course@example.edu is the original placeholder |
| 1.7 dl not for layout | Completed | Both dl lists are term/definition pairs |
| 2.1 to 2.4 Table | Completed | One table with caption, thead, tbody, no tfoot, scope on every th, rowspan/colspan kept |
| 2.5 colgroup | Completed | colgroup and col added |
| 2.6 Example cell explained | Completed | "How to read the timetable" section |
| 2.7 Small-screen table | Completed | Focusable horizontal scroll region, no page overflow at 390 px |
| 3.1 to 3.2 Eight input types, fieldset/legend | Completed | 8 types kept; radio and checkbox in separate fieldsets |
| 3.3 to 3.4 Labels for/id | Completed | Every control has its own label for/id |
| 3.5 Three buttons | Completed | submit, reset, button (Show form help), each tested |
| 3.6 Validation attributes justified | Completed | Reasons in plans/form-field-plan.md; step, min, max kept as the original, tested |
| 3.7 aria-describedby | Completed | Helper text linked for name, email, phone, date, number, URL |
| 3.8 Local POST, no Pages claim | Completed | server.js capture in evidence/network; README states Pages cannot POST |
| 3.9 Unselected checkbox/radio not sent | Completed | Network capture and FormData test |
| 3.10 No extra personal data | Completed | Fields unchanged |
| 4.1 to 4.2 Design kept, contrast reviewed | Completed | 47 text combinations pass |
| 4.3 to 4.5 WCAG 2.2 AA, measured, table | Completed | Computed algorithmically from rendered colours (formula documented); includes non-text contrast, borders measured by pixel sampling; 2 defects fixed |
| 4.6 Focus indicators | Completed | Navy outline on all interactive elements in both browsers |
| 4.7 Skip link | Completed | Visible on all 4 pages in both browsers |
| 4.8 No hidden or clipped focusables | Completed | Checked at 390 px (Chrome) |
| 4.9 Hover, focus, active, disabled | Completed | Hover and active measured with real mouse events; no disabled controls exist |
| 5.1 Help and Reset kept | Completed | Tested in both browsers |
| 5.2 No console errors | Completed | Chrome console empty after favicon fix; Firefox console not captured through WebDriver (not run) |
| 5.3 to 5.4 Invalid blocked, clear messages | Completed | Invalid submit sends no POST; status message shown; success message shown |
| 5.5 to 5.7 POST, checkbox/radio handling, no storage | Completed | evidence/network |
| 5.8 Server instructions | Completed | README.txt |
| 6.1 to 6.6 Plans | Partially Completed | Landmark map, heading outline, form plan, differences all written. 6.3: creation dates cannot be proven (identical timestamps), stated honestly |
| 7.1 Validator output | Completed | Raw Nu output for 4 pages, 0 messages |
| 7.2 Network evidence | Completed | |
| 7.3 Test cases | Completed | 34 cases, Chrome 157 and Firefox 161, one fail-then-fixed case documented |
| 7.4 Keyboard | Completed | Tab order and skip link per page, scripted; not a person at a physical keyboard |
| 7.5 Screen reader lists | Not Completed | No screen reader was run. A Chrome accessibility-tree list is provided and labelled as not a screen reader announcement |
| 7.6 Contrast table | Completed | |
| 7.7 Evidence is real | Completed | All results come from runs; raw data included |
| 8 Reflection | Partially Completed | About 346 words, answers both parts with project specifics; the student must review and confirm it as their own |
| 9.1 to 9.8 Final QA | Completed | Each page tested; links and files exist (MDN link redirects (301) to its current page, which loads (200)); validator; keyboard; contrast; form; all files present |
| 9.9 to 9.10 No false Completed, report | Completed | This report |

The rubric text is the student's own message, not independently verified as the instructor's wording.

## Left for the student
Review and confirm the reflection. Screen-reader testing (item 7.5) needs a real screen reader (NVDA, VoiceOver or TalkBack).
