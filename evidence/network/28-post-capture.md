# Network capture (Chrome DevTools protocol, Network.requestWillBeSent)

One valid registration was submitted to the local server.js (http://localhost:5500). GitHub Pages cannot receive POST, so this is local only.

```
POST http://localhost:5500/submit
Content-Type: application/x-www-form-urlencoded;charset=UTF-8

Body: student_name=Test+User&email=test%40example.com&phone=%2B201001234567&start_date=2026-12-05&student_number=123456&portfolio_url=&study_format=online&topic_html=yes&topic_accessibility=yes
```

## Name/value pairs and why each is present or absent

| Name | Value sent | Why |
|---|---|---|
| student_name | Test User | Text input with a name attribute. |
| email | test@example.com | Text-like input; the @ is percent-encoded as %40 in the body. |
| phone | +201001234567 | Optional, filled in this run; + is encoded as %2B. |
| start_date | 2026-12-05 | Date inputs always submit ISO yyyy-mm-dd. |
| student_number | 123456 | Number input value as text. |
| portfolio_url | (empty) | Optional but left empty: a text-like field with a name is still sent, with an empty value. |
| study_format | online | Only the selected radio is sent, with its value attribute. |
| topic_html | yes | Ticked checkbox is sent with its value. |
| topic_accessibility | yes | Ticked checkbox is sent with its value. |
| topic_css | (absent) | Unticked checkbox is not sent at all. |

With no radio button and no checkbox chosen, FormData holds only the text keys (Chrome result: student_name,email,phone,start_date,student_number,portfolio_url), so study_format is missing entirely; this is why the radio group is required.

Server-side log (server.js prints field names and value lengths only, never values):

```
Course mini-site running at http://localhost:5500
Received fields: student_name (9 chars), email (16 chars), phone (13 chars), start_date (10 chars), student_number (6 chars), portfolio_url (0 chars), study_format (6 chars), topic_html (3 chars), topic_accessibility (3 chars)
```

Firefox sent the same pairs (FormData: student_name=Test User&email=test@example.com&phone=+201001234567&start_date=2026-12-05&student_number=123456&portfolio_url=&study_format=online&topic_html=yes&topic_accessibility=yes).
