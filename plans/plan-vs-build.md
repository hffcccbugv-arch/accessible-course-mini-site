# Plan versus build: differences and reasons

| Item | Earlier plan | Built (this revision) | Reason |
|---|---|---|---|
| Phone pattern | pattern, no stated limits | digits, + ( ) space hyphen, 7 to 20, whole-value match | Tests B14, B17, I3, I4 failed on the original |
| Student number | min 1, max 999999, step 1 | unchanged from the supplied site | Kept as originally planned; a helper text was added |
| Radios and checkboxes | label wrapped around input | separate input and label for=id in a .choice div | Explicit association is more robust and was asked for in the rubric |
| Schedule page headings | three h2 | four h2 | New "How to read the timetable" section explains headers and an example cell |
| Invalid submit | silent browser bubble | bubble plus visible status message | Message was added through the invalid event, because browsers do not fire submit on an invalid form |
| server.js | logged submitted values | logs field names and lengths only, binds 127.0.0.1 | Avoids printing personal data |
