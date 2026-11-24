# Reflection (draft for the student to confirm or edit)

Note: this draft was written from what the project's own files and tests show. The student must read it, change anything that is not true for them, and be able to explain every sentence.

Semantic HTML made each page readable as a set of regions instead of one pile of containers. The header, navigation, main, aside and footer landmarks let a screen-reader user jump to the part they need, and the skip link lets a keyboard user pass the navigation on every page. The heading outline was planned per page: one h1, then h2 sections, then h3 items such as each staff member. The schedule page also needed an extra h2 so the timetable explanation had its own place in the outline.

The timetable is a real table. It has a caption, a colgroup, th cells with scope, a colspan header over the session columns, and a rowspan on one cell. Header cells are what let assistive technology announce a day and a time with each session. The wide table sits in a focusable scroll area, so keyboard users can reach the part that does not fit on a narrow screen.

The form used a fieldset and legend for the radio group and the checkbox group, and a label tied to each control by matching for and id. Testing found a real bug: the first phone pattern accepted "abcdefghij" and a 21-character number, because the pattern did not cover the whole value. After the fix, those inputs were blocked and valid numbers were still accepted. Another test checked that unticked boxes are not sent at all, which matters when reading the submitted data.

The form does not collect a home address, date of birth, password, national ID, payment details or health information. None of them is needed to register for a course. If they were collected, a leak or misuse could lead to identity theft, financial loss or exposure of private health facts. The phone number and portfolio link stay optional so a student can register without sharing more contact details than needed.

Limits: the local server only prints field names and value lengths and stores nothing, and GitHub Pages cannot receive a POST. Real use would need an approved secure service and a privacy notice. Screen-reader testing has not been done.
