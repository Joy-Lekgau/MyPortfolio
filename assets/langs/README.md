Official icons (SimpleIcons)

This project now loads official brand icons for the Languages section directly from the SimpleIcons CDN so the latest SVGs are shown in the portfolio.

If you prefer to keep local copies of the icons instead of loading them from the CDN, you can download them with these PowerShell commands (run from the project root):

```powershell
# create folder if it doesn't exist
if (-not (Test-Path -Path .\assets\langs)) { New-Item -ItemType Directory -Path .\assets\langs }

# download icons from SimpleIcons CDN
Invoke-WebRequest -Uri "https://cdn.simpleicons.org/html5" -OutFile ".\assets\langs\html5.svg"
Invoke-WebRequest -Uri "https://cdn.simpleicons.org/css3" -OutFile ".\assets\langs\css3.svg"
Invoke-WebRequest -Uri "https://cdn.simpleicons.org/javascript" -OutFile ".\assets\langs\javascript.svg"
Invoke-WebRequest -Uri "https://cdn.simpleicons.org/python" -OutFile ".\assets\langs\python.svg"
Invoke-WebRequest -Uri "https://cdn.simpleicons.org/git" -OutFile ".\assets\langs\git.svg"
Invoke-WebRequest -Uri "https://cdn.simpleicons.org/react" -OutFile ".\assets\langs\react.svg"
```

Notes:
- SimpleIcons icons are released under the MIT license. See https://simpleicons.org/ for details.
- After downloading local copies, update the `src` attributes in `index.html` to point to the local files (for example `assets/langs/html5.svg`).
