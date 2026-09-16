# Mohammad Youssef — portfolio

A React, TypeScript, and Vite portfolio for engineering projects across embedded systems, Linux/networking, and web development. The site has project filters, individual case studies, a printable résumé page, and responsive layouts.

## Run locally

```bash
npm install
npm run dev
```

The production build is created with `npm run build` in `dist/`. The build also copies `index.html` to `404.html` so direct project URLs render on GitHub Pages.

## Publish with GitHub Pages

1. Push the project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on each push to `main`.

For a normal project URL such as `username.github.io/portfolio/`, the workflow sets the Vite base path from the repository name automatically. For a custom domain or a `username.github.io` repository, create a repository variable named `SITE_BASE_PATH` with the value `/`. Configure the custom domain in GitHub Pages settings; add a `public/CNAME` file containing the domain if you want it kept in source control.

GitHub Pages serves its `404.html` for direct visits to a case-study URL. The page renders correctly, though GitHub Pages returns a 404 HTTP status for that request. Navigation from within the site uses the normal project URLs.

## Add your details

- Edit `profile` in `src/data.ts` to add email, GitHub, LinkedIn, and an optional résumé path. Empty contact values are hidden.
- Edit each project in `src/data.ts` to add verified details and optional `github` and `demo` links.
- Put actual project photographs in `public/projects/`, then set `image` (for example `/projects/elevator.webp`) and `imageAlt` on the project. A diagram is shown until a photo is provided.
- If adding a résumé PDF, put it in `public/` and set `profile.resume` to its root-relative path (for example `/resume.pdf`).

The artwork is made with CSS so the first version does not imply that an illustration is a photo of a real build.
