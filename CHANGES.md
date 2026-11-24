# Changes made to this copy (24 Nov 2026)

Original site and authorship: Yousef (the teammate's repository was not touched). This copy was edited with an AI assistant for Mazen Rashad. Design, text and structure are the original's except for the items below.

## Markup
- All pages: times use the time element; footer year uses time datetime; main has tabindex -1 so the skip link moves focus; icon link added (removes a favicon 404).
- index.html: abbr for HTML and CSS, nested list under learning outcome 5, cite on the MDN title.
- staff.html: decorative image alt is empty.
- schedule.html: colgroup, labelled focusable scroll region for the table, new section "How to read the timetable" (new h2).
- register.html: separate input and label for every radio and checkbox; corrected phone pattern; visible start window as time elements; aria-describedby helper text for name, email, date, number and URL; student number attributes (min 1, max 999999, step 1) left as the original.

## CSS
- Single .choice rule for radio and checkbox rows; focus ring (navy outline plus amber shadow) also on the table wrapper; input border darkened to #66789a; secondary button border #66789a and fieldset border #7a8bab (non-text contrast); empty status message hidden; hero eyebrow colour #8ccaff to #b3dbff (contrast defect).

## JavaScript
- Invalid submit now shows a visible status message (set from the invalid event).

## server.js
- Binds 127.0.0.1, logs field names and value lengths only, 10 kB body limit, markdown mime type.

## Documentation and evidence
- plans/ and evidence/ rewritten from the built pages and real test runs; reflection.md redrafted (student must confirm); README.txt and STATUS.md added.
