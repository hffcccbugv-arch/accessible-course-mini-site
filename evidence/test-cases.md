# Evidence record — test cases

Run these cases in **two browsers** (for example, Chrome and Firefox or Chrome and Edge). Record the actual result and date after performing each test. Do not treat the expected result as evidence that the test has passed.

| # | Test | Input/action | Expected result | Actual result / browser |
|---:|---|---|---|---|
| 1 | Empty required name | Submit with name empty | Browser blocks submission and focuses/identifies the required field | `empty name` -> INVALID: Please fill out this field. (Chrome headless, assistant run, 24 Nov 2026) |
| 2 | Empty required email | Leave email empty | Required-field validation appears | `empty email` -> INVALID: Please fill out this field. (Chrome headless, assistant run, 24 Nov 2026) |
| 3 | Invalid email | `student-at-example` | Email format validation appears | `student-at-example` -> INVALID: Please include an '@' in the email address. 'student-at-example' is missing an '@'. (Chrome headless, assistant run, 24 Nov 2026) |
| 4 | Valid email boundary | `a@b.co` | Email field accepts a valid address | `a@b.co` -> valid (Chrome headless, assistant run, 24 Nov 2026) |
| 5 | Name too short | One character | `minlength` validation blocks submission | `A` -> INVALID: Please lengthen this text to 2 characters or more (you are currently using 1 character). (Chrome headless, assistant run, 24 Nov 2026) |
| 6 | Name minimum boundary | Two characters | Name passes length validation | `Ab` -> valid (Chrome headless, assistant run, 24 Nov 2026) |
| 7 | Name maximum boundary | More than 60 characters | Browser blocks input beyond maxlength or limits entry | Typed 70 characters: 60 kept (maxlength stops input) (Chrome headless, assistant run, 24 Nov 2026) |
| 8 | Empty date | Leave date empty | Required-field validation appears | `empty date` -> INVALID: Please fill out this field. (Chrome headless, assistant run, 24 Nov 2026) |
| 9 | Date below minimum | A date before 2026-12-01 | Date constraint blocks submission | `` -> INVALID: Please fill out this field.; `2026-11-30` -> INVALID: Value must be 12/01/2026 or later. (Chrome headless, assistant run, 24 Nov 2026) |
| 10 | Date at minimum | 2026-12-01 | Date passes minimum constraint | `2026-12-01` -> valid (Chrome headless, assistant run, 24 Nov 2026) |
| 11 | Date above maximum | A date after 2027-06-30 | Date constraint blocks submission | `2027-07-01` -> INVALID: Value must be 06/30/2027 or earlier. (Chrome headless, assistant run, 24 Nov 2026) |
| 12 | Empty student number | Leave number empty | Required-field validation appears | `empty number` -> INVALID: Please fill out this field. (Chrome headless, assistant run, 24 Nov 2026) |
| 13 | Student number below minimum | 0 | Number constraint blocks submission | `0` -> INVALID: Value must be greater than or equal to 1. (Chrome headless, assistant run, 24 Nov 2026) |
| 14 | Student number at minimum | 1 | Number passes minimum constraint | `1` -> valid (Chrome headless, assistant run, 24 Nov 2026) |
| 15 | Student number above maximum | 1000000 | Number constraint blocks submission | `1000000` -> INVALID: Value must be less than or equal to 999999. (Chrome headless, assistant run, 24 Nov 2026) |
| 16 | Invalid phone pattern | Letters in phone field | Pattern validation blocks submission when a value is entered | `abcdefghij` -> INVALID: Please match the requested format. (Chrome headless, assistant run, 24 Nov 2026) |
| 17 | Valid phone pattern | `+201001234567` | Phone pattern accepts the value | `+201001234567` -> valid (Chrome headless, assistant run, 24 Nov 2026) |
| 18 | Invalid URL | `not-a-url` | URL validation blocks submission when a value is entered | `not-a-url` -> INVALID: Please enter a URL. (Chrome headless, assistant run, 24 Nov 2026) |
| 19 | Missing radio choice | Do not select a study format | Required radio group blocks submission | `no radio` -> INVALID: Please select one of these options. (Chrome headless, assistant run, 24 Nov 2026) |
| 20 | Optional checkboxes empty | Leave all topics unchecked | Form remains valid; unchecked boxes are omitted from submitted pairs | Checkboxes valid when unchecked; after submitting, unchecked topic_css was absent from the POST body (Chrome headless, assistant run, 24 Nov 2026) |
| 21 | Reset button | Enter data then activate Reset | All controls return to their initial state | Typed in name, called reset: name cleared (Chrome headless, assistant run, 24 Nov 2026) |
| 22 | Keyboard navigation | Use Tab, Shift+Tab, Enter, and Space | Focus is visible and all links/controls can be operated | See keyboard run below (Chrome headless, assistant run, 24 Nov 2026) |
| 23 | Skip link | Press Tab from page load, then Enter | Focus moves to main content | index, staff, schedule, register: Tab then Enter on the skip link moves focus to main#main-content (Chrome headless, assistant run, 24 Nov 2026) |
| 24 | Shared navigation | Open each page and inspect header/footer | Same navigation labels and footer appear on all pages | Header and footer markup compared across all four pages (aria-current removed): identical (Chrome headless, assistant run, 24 Nov 2026) |

## Validator evidence
Run each of the four HTML pages through https://validator.w3.org/nu/ and save the result or screenshot. Record errors and warnings, fix errors, then validate again. Attach the actual validator output here or in the submission evidence folder.

## Network evidence for the form
Start the included local server with `node server.js`, open `http://localhost:5500/register.html`, open Developer Tools > Network, submit valid test data, and inspect the `POST /submit` request. Record the submitted `name=value` pairs and explain:
- Controls without a `name` are not submitted.
- Unchecked checkboxes are not submitted.
- The form sends only named controls that contribute a value.
The local server prints the received pairs but does not store them.

## Keyboard and screen-reader evidence
Record the browser, operating system, screen reader, page, and exact announcement/observed result. Test the skip link, navigation landmark, page heading, table headers, form labels, fieldsets, legends, and status message.

## Contrast evidence
Measure the actual foreground/background combinations with a contrast checker. Record the measured ratio and WCAG AA verdict for normal text (4.5:1 minimum) and large text (3:1 minimum). Do not estimate ratios by eye.


## Status of the evidence in this file (24 Nov 2026)
- The actual results above were produced by an AI assistant driving headless Chrome against the local copy (http://localhost:5500). Only one browser was used. The second browser is NOT done: repeat these cases in Firefox or Edge and record the results. Cases 1 to 24 should also be repeated by the student by hand so the student can explain them.
- Case 22 (keyboard): Tab order on index and register was recorded in Chrome: skip link, brand, four nav links, then page content in source order, then the footer link. Every stop showed an outline. On a 390 px screen the timetable wrapper on schedule.html is now a keyboard stop (tabindex 0).
- Validator: all four pages were posted to https://validator.w3.org/nu/ after the edits: 0 errors, 0 warnings each. The files returned by the checker are not saved here; run it yourself and attach the output.

## Network evidence (recorded from a real local submission)
Request: POST http://localhost:5500/submit, content type application/x-www-form-urlencoded. Test data only.
Body: `student_name=Test+User&email=test%40example.com&phone=%2B201001234567&start_date=2026-12-05&student_number=123456&portfolio_url=&study_format=online&topic_html=yes&topic_accessibility=yes`
Server console showed the same nine pairs.
- Every named control with a value contributes a pair.
- `portfolio_url` was left empty and is still sent, as an empty value. Empty text fields are sent; they are not left out.
- The checkbox `topic_css` was not ticked and is absent from the body. An unticked checkbox sends nothing.
- Only one radio value (`study_format=online`) is sent for the group.
- Buttons (submit, reset, help) have no `name`, so none of them appears.
- The date is sent as `2026-12-05` regardless of the on-screen format.

## Not done
Screen-reader announcements and a measured contrast table were not produced. The assistant calculated contrast from the CSS colours as a check only (see CHANGES.md); the student must measure and record their own table.
