---
name: maintain-hongzhengtian-site
description: Maintain Hongzheng Tian's personal academic website built with al-folio and GitHub Pages. Use when editing website text, CV content, research projects, publications, profile/CV assets, navigation pages, news items, deployment documentation, GitHub Pages settings, or when optimizing this repository after it has been cloned on a new computer.
---

# Maintain Hongzheng Tian Site

## Overview

This repository is Hongzheng Tian's al-folio-based academic website. Keep content edits small, traceable, and consistent with the current structure. Read `references/site-map.md` before changing files that affect pages, navigation, publications, assets, or deployment.

## Workflow

1. Inspect the current repository state with `git status --short`.
2. Read the target files before editing; do not infer content from memory.
3. Make the smallest content change that satisfies the request.
4. Preserve existing al-folio front matter keys unless intentionally adding or hiding a page.
5. Validate with lightweight checks at minimum:
   - `git diff --check`
   - Confirm edited Markdown files still start with closed YAML front matter when applicable.
   - Confirm referenced local assets exist.
6. If Ruby/Bundler is installed, run `bundle exec jekyll build`. If not, state that local build was skipped and rely on GitHub Actions after push.
7. Commit with a focused message and push to `origin main` when the user asks to publish.
8. After push, confirm both workflows complete:
   - `Deploy site` on `main`
   - `pages build and deployment` on `gh-pages`
9. Verify the public URL that changed, using a cache-busting query string if needed.

## Content Editing Rules

- Do not rewrite the website's content voice unless the user asks for copyediting or visual optimization.
- Do not delete the old Google Sites content or change custom domain DNS from code.
- Do not expose private contact details in HTML unless the user explicitly requests it. The PDF CV may contain fuller contact details; the web page currently keeps the public UCI email and public profile links.
- Keep `/cv/` as a hand-written Markdown page unless the user explicitly wants to return to al-folio's structured `layout: cv` / RenderCV flow.
- Prefer adding content in existing page files over introducing new templates or custom layouts.
- Keep public URLs stable when possible: `/`, `/research/`, `/publications/`, `/experience/`, `/cv/`, `/photography/`.

## Common Tasks

### Update About Text

Edit `_pages/about.md`. The profile image is configured in front matter as `profile.image: prof_pic.jpg`, which resolves to `assets/img/prof_pic.jpg`.

### Update CV

Edit `_pages/cv.md` for the web CV. Replace `assets/pdf/HongzhengTian_CV.pdf` for the downloadable PDF. Keep the PDF link path stable unless all links are updated.

### Update Publications

Edit `_bibliography/papers.bib`. Use valid BibTeX entries and keep fields such as `abbr`, `html`, `pdf`, `code`, `doi`, `arxiv`, and `selected` when useful. The `/publications/` page is generated from this file.

### Update Research Cards

Edit files under `_projects/`. The `/research/` page sorts project cards by `importance`. Use short descriptions and stable external links.

### Update Experience, Awards, Activities, Courses

Edit `_pages/experience.md` for the summarized public page. Edit `_pages/cv.md` when the same information should appear in the full web CV.

### Update News On Homepage

Add or edit Markdown files in `_news/`. Keep front matter valid and use short announcements.

### Update Social Links

Edit `_data/socials.yml` for CV PDF, email, GitHub, LinkedIn, and RSS visibility.

### Add A Simple New Page

Create `_pages/<name>.md` with:

```yaml
---
layout: page
title: page title
permalink: /page-url/
description: One sentence for search/navigation.
nav: true
nav_order: 6
---
```

Then write Markdown content below the front matter. Set `nav: false` for hidden pages.

## Deployment Notes

The site deploys from `main` through `.github/workflows/deploy.yml`, which builds `_site` and pushes it to `gh-pages`. GitHub Pages must serve from `gh-pages / (root)`, not `main / (root)`.

If the public site shows 404 after a successful push, check GitHub repository Settings -> Pages and confirm:

- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/ (root)`

For custom domains, use GitHub Settings -> Pages -> Custom domain and DNS provider settings; do not try to solve DNS purely by editing Markdown.
