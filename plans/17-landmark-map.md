# Landmark map

Applies to all four pages unless noted. Roles below are the HTML elements the pages use; the Chrome accessibility tree confirmed them (evidence/accessibility-tree.md).

| Landmark | Element | Where | Purpose |
|---|---|---|---|
| banner | header | all pages | Course name and main navigation |
| navigation "Main navigation" | nav | inside header | Links to the four pages; current page marked aria-current |
| main | main#main-content | all pages | Page content; target of the skip link (tabindex -1) |
| complementary | aside | index (Quick information), staff (Contact and support) | Side information that is not part of the main flow |
| contentinfo | footer | all pages | Copyright year and course name |

Named regions (sections with an accessible name): index "Web Design & Development" hero; schedule "Class timetable", "How to read the timetable", and the scrollable timetable wrapper (role region, focusable); register "Registration form" with the form itself.

Skip link: the first focusable element on every page, jumps to main#main-content.
