# lalchand

Automatic e-Hall Ticket (admit card) generator for LNMIIT mid-term exams, Odd Semester 2026-27.

- `admit_card_generator/index.html`: a web page where a student enters their details, uploads a photo and picks subjects from the timetable. Tapping Generate shows the admit card, ready to print or save as PDF. Open the file in a browser; no server is needed.
- `admit_card_latex/admit_card.tex`: a LaTeX replica of the IITMS e-Hall Ticket. Compile it with `xelatex admit_card.tex`; it needs the Verdana and Arial fonts.
