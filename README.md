Legends of Alorgon — Local Site (annotated)

Overview
- A small static site inspired by the OG Minecraft layout but customized for "Legends of Alorgon".
- Key files:
  - `MainPage.html` — main page (annotated with foldable regions).
  - `styles.css` — site styles with region comments for clarity.
  - `banner.svg` — top neon banner (replace to change the banner).
  - `icons/` — small SVG icons (youtube, googleplus, soundcloud).
  - `blog/posts.json` — list of blog posts (editable JSON).
  - `blog/render.js` — tiny client-side script that loads `posts.json` and injects posts into the page.

Editing the blog
1. Open `blog/posts.json` and add a post object to the `posts` array. Example:
   {
     "id": "post-3",
     "title": "New Update",
     "date": "2025-10-02",
     "excerpt": "Short summary of the update.",
     "image": ""
   }
2. Save and refresh the page. If you open the HTML directly (file://), modern browsers may block the fetch API used by `render.js`.
3. To avoid this, run a simple static server (Python example):

```powershell
# in the site root folder (where MainPage.html is)
python -m http.server 8000
# then open http://localhost:8000/MainPage.html
```

Changing the banner
- Replace `banner.svg` with your own image (same filename) or edit `styles.css` to point to a different file.
- The banner uses `background-size: cover` so it will crop to fill the width. Adjust height in `styles.css` (`.top-banner--bg`) if needed.

Notes for non-coders
- Files are annotated with region markers (like `/* #region */`) so you can collapse big sections in editors such as VS Code.
- If you want me to make a GUI for editing blog posts or replacing the banner from the browser, I can add a small admin page (requires running a local server with write access).

If you want more organization I can:
- Split styles into multiple files (layout.css, theme.css, components.css).
- Inline SVG icons so they inherit CSS easily.
- Add thumbnails to blog posts and render images in the blog listings.

Tell me which of these you'd like next and I'll implement it.