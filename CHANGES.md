# Changes made to this copy (24 Nov 2026)

Original site and authorship: Yousef (the teammate's repository was not touched). This copy was edited by an AI assistant for Mazen Rashad. Design, text and structure are the original's except for the items below.

## Markup
- index.html: `<abbr>` on HTML and CSS (first use); nested list under outcome 5 (keyboard / browser tools); `<time datetime="11:00">` and `13:00` for session times; `<cite>` around the title "Learn web development" in the MDN link.
- staff.html: session times in `<time>`; the staff picture is now decorative (`alt=""`) because its caption already says what it shows.
- schedule.html: times in `<time>`; the table wrapper is a labelled, focusable region.
- register.html: `<em>` on "must"; visible start window as `<time datetime="2026-12-01">` and `2027-06-30`, the same values as the date field's min and max; `id` and `for` on all radios and checkboxes; phone pattern fixed.
- All pages: `tabindex="-1"` on main so the skip link moves focus.

## Style (styles.css)
- Focus ring: navy outline plus amber ring; table wrapper gets the same focus style.
- Input border #8798b0 to #66789a (4.45:1 on white; was 2.94:1).
- Empty status message hidden; main has no outline when focused by the skip link.

## Not changed
Student number is still `type="number"` (the plan table lists it). The rubric prefers `pattern` for a fixed-shape ID; switching would drop one of the eight input types, so decide yourself. Google Fonts import kept. The reflection text is unchanged: it is general and needs real specifics from the student. Weekday names ("Sunday") stay plain text because a weekday alone is not a valid `datetime` value.
