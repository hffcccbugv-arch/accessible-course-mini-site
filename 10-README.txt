ACCESSIBLE COURSE MINI-SITE
Course: Web Design & Development

Original site and authorship: Yousef (teammate). This copy was edited for Mazen Rashad with help from an AI assistant, which was used to audit the pages, fix the items listed in CHANGES.md, run the tests in evidence/, and draft plans/ and reflection.md. The student must be able to explain any line.

CONTENTS
- index.html, staff.html, schedule.html, register.html: the four pages
- styles.css, script.js: styling and interactions
- server.js: optional local server for the form (see below)
- assets/: illustration (also used as the icon) and course outline
- plans/: landmark map, heading outlines, form-field plan, plan provenance, plan-vs-build
- evidence/: 34 test cases (Chrome and Firefox), validator output, network capture, keyboard notes, accessibility tree summary, contrast table, defect log, screenshots, raw run data
- reflection.md: draft reflection for the student to confirm or edit
- STATUS.md: requirement-by-requirement status

OPEN IN VS CODE
1. Extract the ZIP file. 2. File > Open Folder. 3. Open index.html with Live Server for a visual preview.

RUN THE FORM SERVER (local only)
1. Install Node.js. 2. In the VS Code terminal in this folder run: node server.js
3. Open http://localhost:5500/register.html, fill the form and submit.
4. The terminal prints only the field NAMES and the length of each value. Nothing is saved. The server listens on 127.0.0.1 only.
5. To see the name=value pairs, open the browser DevTools Network panel and click the submit request.

GITHUB PAGES
GitHub Pages serves static files only and cannot receive a POST. On the published site, a valid submit shows an error from the host instead of the local demo message. The form demonstration works only with node server.js.

TESTING NOTES
Tests were run by a script in Chrome 157 and Firefox 161 (headless). No screen reader was run. Anything not run is marked as unrun in STATUS.md.
