# Site Map Reference

## Repository Purpose

This repository is the source for `https://hongzhengtian.github.io/`, Hongzheng Tian's personal academic website. It uses the al-folio Jekyll theme and deploys through GitHub Actions.

## Key Files And Directories

- `_config.yml`: global site identity, URL, theme options, collections, defaults, and plugin settings.
- `_pages/about.md`: homepage at `/`.
- `_pages/projects.md`: research index at `/research/`; it renders `_projects/*`.
- `_pages/publications.md`: publications page at `/publications/`; it renders `_bibliography/papers.bib`.
- `_pages/experience.md`: summarized experience, honors, activities, and education.
- `_pages/cv.md`: hand-written web CV page at `/cv/`.
- `_pages/photography.md`: personal photography page.
- `_pages/404.md`: custom not found page.
- `_projects/*.md`: research project detail/card source files.
- `_bibliography/papers.bib`: publication metadata used by the publications page.
- `_news/*.md`: homepage announcements.
- `_data/socials.yml`: social links and CV PDF path.
- `_data/cv.yml`: legacy structured CV data; currently not used by `/cv/` because `/cv/` is hand-written Markdown.
- `assets/img/prof_pic.jpg`: profile image shown on the homepage.
- `assets/pdf/HongzhengTian_CV.pdf`: downloadable CV PDF.
- `.github/workflows/deploy.yml`: GitHub Actions deployment pipeline.
- `README.md`: repository overview and maintenance pointers.
- `docs/WEBSITE_MAINTENANCE.md`: human-facing maintenance guide.
- `.codex/skills/maintain-hongzhengtian-site/`: project-local AI-agent maintenance skill.

## Current Public Routes

- `/`: homepage / about
- `/research/`: research project grid
- `/publications/`: bibliography-generated publications
- `/experience/`: summarized experience and activities
- `/cv/`: full web CV with PDF download button
- `/photography/`: personal photography placeholder/page

## Front Matter Patterns

Simple page:

```yaml
---
layout: page
title: page title
permalink: /page-url/
description: One sentence.
nav: true
nav_order: 6
---
```

Research project:

```yaml
---
layout: page
title: "Project Title"
description: "Short card description."
importance: 1
category: research
related_publications: true
---
```

Homepage uses `layout: about` and profile settings in front matter. Do not change `layout: about` unless redesigning the homepage.

## Deployment Model

Pushes to `main` trigger `Deploy site`. The workflow builds the Jekyll site and publishes generated files to `gh-pages`. GitHub Pages then serves `gh-pages / (root)`.

If Pages is accidentally set to `main / (root)`, al-folio source may fail GitHub's default Pages build and the site may show 404. Fix in GitHub web UI: repository Settings -> Pages -> Build and deployment -> Deploy from a branch -> `gh-pages` -> `/ (root)` -> Save.

## Validation Checklist

- `git status --short` before editing.
- `git diff --check` before commit.
- Confirm Markdown front matter starts and ends with `---`.
- Confirm asset paths exist after replacing images or PDFs.
- If local Ruby exists: `bundle exec jekyll build`.
- After push: check Actions and then verify the changed public URL.
