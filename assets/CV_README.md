Place your CV (PDF) here

To add your CV to the portfolio, save a PDF named `CV.pdf` inside the `assets` folder at the repository root. The header 'Download CV' button links to `assets/CV.pdf` and will prompt visitors to download the file.

Steps (Windows PowerShell):

1. Copy your CV PDF into the `assets` folder. Example:
   Copy-Item -Path "C:\Users\You\Desktop\YourCV.pdf" -Destination ".\assets\CV.pdf"

2. Refresh the portfolio page in your browser (open `index.html`) and click the "Download CV" button to verify the file downloads.

Notes:
- Keep the file name exactly `CV.pdf` or update the `href` in `index.html` to match your chosen filename.
- If you'd prefer the CV to open in a new tab instead of downloading, remove the `download` attribute from the link in `index.html`.
- If you'd like, I can upload a sample CV placeholder or add a dedicated CV page instead of a download link. Tell me which you prefer.
