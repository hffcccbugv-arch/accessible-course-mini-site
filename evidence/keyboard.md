# Keyboard testing (Tab order, skip link, focus)

Method: scripted Tab presses in Chrome 157 and Firefox 161; the focused element and its computed outline were recorded after each press. This is not a manual test by a person with a physical keyboard.

## Skip link

| Page | Visible on focus (Chrome) | After Enter (Chrome) | Visible (Firefox) | After Enter (Firefox) |
|---|---|---|---|---|
| index | True | MAIN#main-content hash=#main-content | True | MAIN#main-content hash=#main-content |
| staff | True | MAIN#main-content hash=#main-content | True | MAIN#main-content hash=#main-content |
| schedule | True | MAIN#main-content hash=#main-content | True | MAIN#main-content hash=#main-content |
| register | True | MAIN#main-content hash=#main-content | True | MAIN#main-content hash=#main-content |

Screenshots: screenshots/chrome_skiplink.png, screenshots/firefox_skiplink.png

## Tab order (Chrome)

### index.html

1. A Skip to main content | outline solid 3px
2. A Web Design and Development course home | outline solid 3px
3. A Home | outline solid 3px
4. A Course staff | outline solid 3px
5. A Schedule | outline solid 3px
6. A Registration | outline solid 3px
7. A Register for the course | outline solid 3px
8. A Meet the course staff | outline solid 3px
9. A View the weekly class schedule | outline solid 3px
10. A Open the student registration form | outline solid 3px
11. A Read MDN's Learn web development guide | outline solid 3px
12. A Download the Web Design course outline ( | outline solid 3px
13. A Email the course team about a course que | outline solid 3px
14. A Return to the course home page | outline solid 3px

### staff.html

1. A Skip to main content | outline solid 3px
2. A Web Design and Development course home | outline solid 3px
3. A Home | outline solid 3px
4. A Course staff | outline solid 3px
5. A Schedule | outline solid 3px
6. A Registration | outline solid 3px
7. A Check the practical-session schedule | outline solid 3px
8. A Return to the course home page | outline solid 3px

### schedule.html

1. A Skip to main content | outline solid 3px
2. A Web Design and Development course home | outline solid 3px
3. A Home | outline solid 3px
4. A Course staff | outline solid 3px
5. A Schedule | outline solid 3px
6. A Registration | outline solid 3px
7. DIV Weekly timetable, scrollable | outline solid 3px
8. A Register using the student registration  | outline solid 3px
9. A Return to the course home page | outline solid 3px

### register.html

1. A Skip to main content | outline solid 3px
2. A Web Design and Development course home | outline solid 3px
3. A Home | outline solid 3px
4. A Course staff | outline solid 3px
5. A Schedule | outline solid 3px
6. A Registration | outline solid 3px
7. INPUT student_name | outline solid 3px
8. INPUT email | outline solid 3px
9. INPUT phone | outline solid 3px
10. INPUT start_date | outline solid 3px
11. INPUT start_date | outline solid 3px
12. INPUT start_date | outline solid 3px
13. INPUT start_date | outline none 3px
14. INPUT student_number | outline solid 3px
15. INPUT portfolio_url | outline solid 3px
16. INPUT study_format | outline solid 3px
17. INPUT topic_html | outline solid 3px
18. INPUT topic_css | outline solid 3px
19. INPUT topic_accessibility | outline solid 3px
20. BUTTON Submit registration | outline solid 3px
21. BUTTON Reset form | outline solid 3px
22. BUTTON Show form help | outline solid 3px
23. A Return to the course home page | outline solid 3px

Firefox produced the same order on all four pages (raw-firefox-run.json). On register.html, the start-date input appears 4 times because the date control has day, month and year segments plus the picker, a browser behaviour.

Focus style: outline rgb(16, 42, 86) 3px solid with box-shadow rgb(255, 191, 71) 0px 0px 0px 3px. Hidden or clipped focusable elements at 390 px wide: none found on any page.
