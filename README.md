# Somesh Waran — React Portfolio

A responsive dark-theme portfolio for a fresher Java Full Stack Developer.

## Requirements
- Node.js LTS (includes npm)
- A code editor such as VS Code

## Run locally
1. Extract this ZIP.
2. Open a terminal inside the `somesh-portfolio` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Customize before sharing
- **Profile photo:** `public/profile.jpeg` (already included).
- **Resume:** replace `public/resume.pdf` with your real, up-to-date PDF resume. The current PDF is a placeholder.
- **Email / LinkedIn / GitHub:** edit the sample links in `src/App.jsx`.
- **Education and training:** replace bracketed placeholders with exact details.
- **Projects:** add accurate descriptions, GitHub repository URLs, and live demo URLs. Do not claim features you have not built.
- **Skills:** remove any technology you have not practiced.

## Build for production
```bash
npm run build
npm run preview
```
The production-ready website is generated in the `dist` folder.

## Deploy free
### Vercel
1. Push this folder to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

### Netlify
1. Push the project to GitHub and import it into Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy.

## Notes
The resume link downloads `/resume.pdf`. Replace the placeholder PDF before publishing. Google Fonts are loaded online; the site otherwise uses local React/CSS and the included profile photo.
