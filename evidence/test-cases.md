# Test cases (34)

Each case was run in Chrome 157 and Firefox 161 (both headless, driven by script, on Linux) against the fixed copy served by server.js. Input, expected result and actual result are recorded. "Actual" is the validation state the browser reported (checkValidity / validationMessage).

| ID | Category | Case | Input | Expected | Actual (Chrome) | Chrome | Actual (Firefox) | Firefox |
|---|---|---|---|---|---|---|---|---|
| E1 | Empty | name empty | (empty) | blocked | blocked: Please fill out this field. | Pass | blocked: Please fill out this field. | Pass |
| E2 | Empty | email empty | (empty) | blocked | blocked: Please fill out this field. | Pass | blocked: Please fill out this field. | Pass |
| E3 | Empty | start date empty | (empty) | blocked | blocked: Please fill out this field. | Pass | blocked: Please fill out this field. | Pass |
| E4 | Empty | student number empty | (empty) | blocked | blocked: Please fill out this field. | Pass | blocked: Please enter a number. | Pass |
| E5 | Empty | study format: no radio selected | (empty) | blocked | blocked: Please select one of these options. | Pass | blocked: Please select one of these options. | Pass |
| E6 | Empty | phone empty (optional) | (empty) | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| E7 | Empty | URL empty (optional) | (empty) | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B1 | Boundary | name 1 character | A | blocked | blocked: Please lengthen this text to 2 characters or more (you are currently using 1 character). | Pass | blocked: Please use at least 2 characters (you are currently using 1 characters). | Pass |
| B2 | Boundary | name 2 characters | Ab | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B3 | Boundary | name 60 characters | 60 characters | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B4 | Boundary | name typed 61 characters (maxlength 60) | 61 characters | value kept at 60 characters | value length 60 | Pass | value length 60 | Pass |
| B5 | Boundary | email 100 characters | 100-character address | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B6 | Boundary | start date 2026-11-30 (day before min) | =2026-11-30 | blocked | blocked: Value must be 12/01/2026 or later. | Pass | blocked: Please select a value that is no earlier than 12/01/2026. | Pass |
| B7 | Boundary | start date 2026-12-01 (min) | =2026-12-01 | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B8 | Boundary | start date 2027-06-30 (max) | =2027-06-30 | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B9 | Boundary | start date 2027-07-01 (day after max) | =2027-07-01 | blocked | blocked: Value must be 06/30/2027 or earlier. | Pass | blocked: Please select a value that is no later than 06/30/2027. | Pass |
| B10 | Boundary | student number 0 | 0 | blocked | blocked: Value must be greater than or equal to 1. | Pass | blocked: Please select a value that is no less than 1. | Pass |
| B11 | Boundary | student number 1 | 1 | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B12 | Boundary | student number 999999 | 999999 | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B13 | Boundary | student number 1000000 | 1000000 | blocked | blocked: Value must be less than or equal to 999999. | Pass | blocked: Please select a value that is no more than 999999. | Pass |
| B14 | Boundary | phone 6 characters | 123456 | blocked | blocked: Please match the requested format. | Pass | blocked: Please match the requested format. | Pass |
| B15 | Boundary | phone 7 characters | 1234567 | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B16 | Boundary | phone 20 characters | +20 (010) 1234-5678- | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| B17 | Boundary | phone 21 characters | +20 (010) 1234-5678-9 | blocked | blocked: Please match the requested format. | Pass | blocked: Please match the requested format. | Pass |
| I1 | Invalid | email without @ | student-at-example | blocked | blocked: Please include an '@' in the email address. 'student-at-example' is missing an '@'. | Pass | blocked: Please enter an email address. | Pass |
| I2 | Invalid | email a@b (valid under the HTML email rule) | a@b | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| I3 | Invalid | phone letters only | abcdefghij | blocked | blocked: Please match the requested format. | Pass | blocked: Please match the requested format. | Pass |
| I4 | Invalid | phone mixed digits and letters | 12345-abc | blocked | blocked: Please match the requested format. | Pass | blocked: Please match the requested format. | Pass |
| I5 | Invalid | phone valid international format | +201001234567 | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| I6 | Invalid | URL not a URL | not-a-url | blocked | blocked: Please enter a URL. | Pass | blocked: Please enter a URL. | Pass |
| I7 | Invalid | URL without scheme | example.com | blocked | blocked: Please enter a URL. | Pass | blocked: Please enter a URL. | Pass |
| I8 | Invalid | URL valid https | https://example.com | accepted | accepted (valid) | Pass | accepted (valid) | Pass |
| I9 | Invalid | student number 1.5 (not whole) | 1.5 | blocked | blocked: Please enter a valid value. The two nearest valid values are 1 and 2. | Pass | blocked: Please select a valid value. The two nearest valid values are 1 and 2. | Pass |
| I10 | Invalid | student number letters typed | abc | blocked | blocked: Please fill out this field. | Pass | blocked: Please enter a number. | Pass |

## Before and after (real failure found)

The original live copy was run on the phone cases only (raw: evidence/raw-before-original-phone-cases.json). Four cases were wrongly accepted because the phone pattern did not cover the whole value:

| ID | Input | Expected | Original copy | Fixed copy (Chrome / Firefox) |
|---|---|---|---|---|
| B14 | 123456 | blocked | accepted (valid) (FAIL) | blocked: Please match the requested format. / blocked: Please match the requested format. |
| B17 | +20 (010) 1234-5678-9 | blocked | accepted (valid) (FAIL) | blocked: Please match the requested format. / blocked: Please match the requested format. |
| I3 | abcdefghij | blocked | accepted (valid) (FAIL) | blocked: Please match the requested format. / blocked: Please match the requested format. |
| I4 | 12345-abc | blocked | accepted (valid) (FAIL) | blocked: Please match the requested format. / blocked: Please match the requested format. |

## Other behaviour checks (Chrome / Firefox)

| Check | Chrome | Firefox |
|---|---|---|
| Valid submit status | Registration submitted to the local demonstration server. No information has been saved permanently. | Registration submitted to the local demonstration server. No information has been saved permanently. |
| Invalid submit status message | The form was not submitted. Correct the field marked as invalid, then submit again. (no POST sent: 0) | The form was not submitted. Correct the field marked as invalid, then submit again. |
| Reset clears fields | cleared / status: The form has been reset. | cleared |
| Help toggle open / closed | false|Hide form help / true|Show form help | false|Hide form help / true|Show form help |
| FormData keys, valid submit | see network/post-capture.md | student_name=Test User&email=test@example.com&phone=+201001234567&start_date=2026-12-05&student_number=123456&portfolio_url=&study_format=online&topic_html=yes&topic_accessibility=yes |
| No horizontal overflow (390/768/1400) | yes, all 4 pages | scrollWidth equals clientWidth at 390 and 1400 on all 4 pages |
