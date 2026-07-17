# Hongzheng Tian Academic Website

This repository hosts the personal academic website for Hongzheng Tian, built with [al-folio](https://github.com/alshedivat/al-folio) and intended for GitHub Pages.

## Local development

The deployed site uses Ruby 3.3.5 and Bundler 4.0.6. After installing the project dependencies, run:

```bash
bundle install
npm ci
bundle exec jekyll build
bundle exec jekyll serve --livereload --livereload-port 35730
```

Then open `http://127.0.0.1:4000/`. For the complete first-time macOS setup, compiler troubleshooting, and local validation checklist, see [`docs/WEBSITE_MAINTENANCE.md`](docs/WEBSITE_MAINTENANCE.md#新-mac-第一次配置开发环境).

The production site is configured for:

```text
https://hongzhengtian.com
```

## Deployment

The included GitHub Actions workflow builds the Jekyll site and deploys the generated `_site` directory to the `gh-pages` branch. In the GitHub repository settings, configure Pages to serve from the `gh-pages` branch.

## Maintenance

For future content edits, see `docs/WEBSITE_MAINTENANCE.md`. For AI-assisted maintenance, see `.codex/skills/maintain-hongzhengtian-site/SKILL.md`.
