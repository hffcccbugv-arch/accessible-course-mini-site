# Registration form field plan

| Field | Control | Validation attributes | Reason for each attribute | Required or optional |
|---|---|---|---|---|
| Full name | input type=text, name student_name | required, minlength 2, maxlength 60, autocomplete name | required: the course list needs a name. minlength 2 blocks a single stray letter (test B1). maxlength 60 keeps the list readable (test B4). autocomplete lets the browser fill it. | Required |
| Email address | input type=email, name email | required, maxlength 100, autocomplete email | required: the only contact route for course updates. type=email gives built-in syntax checking. maxlength limits abuse. | Required |
| Phone number | input type=tel, name phone | pattern [0-9+\(\) \-]{7,20}, autocomplete tel | pattern allows digits, plus, brackets, spaces and hyphens, 7 to 20 characters, matching the whole value (the first version let letters and a 21-character value through, defect D1). type=tel gives a phone keypad. | Optional: not needed to register |
| Preferred start date | input type=date, name start_date | required, min 2026-12-01, max 2027-06-30 | required: planning needs it. min and max keep it inside the visible start window shown on the page. | Required |
| Student number | input type=number, name student_number | required, min 1, max 999999, step 1 | required: links the entry to the student's record. min 1 blocks zero and negatives (test case 13 in the original plan). max 999999 and step 1 (whole numbers only) are the values already in the supplied site and plan; no other source gives a real university number format, so they are kept as the original author set them, not extended. | Required |
| Portfolio URL | input type=url, name portfolio_url | none besides type | type=url checks URL syntax. Optional so a beginner without a portfolio can still register. | Optional |
| Study format | radio group, name study_format, 3 radios | required on the first radio | A group needs exactly one answer; without a selection the field is missing from the submitted data (network capture). | Required |
| Topics of interest | checkbox group, names topic_html, topic_css, topic_accessibility | none | Any number, including none, is fine; unticked boxes are not sent. | Optional |

All controls have a visible label tied by for and id; each of name, email, date, number, url and phone has a helper text linked through aria-describedby. The radio and checkbox groups sit in fieldset with legend.

## Data not collected, and why
Home address, date of birth, password, national ID, payment details and health information are not asked. None is needed to register for a course, and each would raise the harm of a leak (identity theft, fraud, exposure of private facts).
