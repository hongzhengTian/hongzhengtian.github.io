# Hongzheng Tian Academic Website

This repository hosts the personal academic website for Hongzheng Tian, built with [al-folio](https://github.com/alshedivat/al-folio) and intended for GitHub Pages.

## Local development

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

The production site is configured for:

```text
https://hongzhengtian.github.io
```

## Deployment

The included GitHub Actions workflow builds the Jekyll site and deploys the generated `_site` directory to the `gh-pages` branch. In the GitHub repository settings, configure Pages to serve from the `gh-pages` branch.

## Maintenance

For future content edits, see `docs/WEBSITE_MAINTENANCE.md`. For AI-assisted maintenance, see `.codex/skills/maintain-hongzhengtian-site/SKILL.md`.
