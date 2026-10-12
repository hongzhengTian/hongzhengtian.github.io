# Website and CV synchronization

Read `docs/WEBSITE_MAINTENANCE.md` and the local
`.codex/skills/maintain-hongzhengtian-site/SKILL.md` before website maintenance.

Treat CV content updates as a joint task with `../HongzhengTian_CV`:

- Update shared facts in the LaTeX CV and relevant website files together:
  `_pages/cv.md`, `_pages/experience.md`, `_projects/`, `_bibliography/papers.bib`,
  `_pages/about.md`, and `_data/socials.yml`, as applicable. Keep relevant legacy
  `_data/cv.yml` fields consistent too.
- Generate and visually review `../HongzhengTian_CV/output/pdf/HongzhengTian_CV.pdf`,
  then copy that exact file to `assets/pdf/HongzhengTian_CV.pdf`. Verify byte equality
  between both copies and the built `_site/assets/pdf/HongzhengTian_CV.pdf`.
- Keep shared facts consistent while preserving the website's existing choice
  to show fewer personal contact details than the PDF. Do not invent missing facts.
- Run the formatting check, style contract check, Jekyll build, and
  `git diff --check`. `_layouts/redirect.html` is the only permitted local layout;
  preserve and verify legacy redirects when changing their template or rules.
- Commit and push only when authorized by the user. When publication is
  authorized, publish both repositories, confirm both deployment workflows,
  and verify live shared facts and the live PDF against the local PDF.
- If either repository is unavailable, report synchronization as incomplete.

- Maintain `resume.tex` in the CV repository alongside shared CV facts. Compile it
  to `output/pdf/HongzhengTian_Resume.pdf`, keep it one page, and copy the exact
  file to the website `assets/pdf/HongzhengTian_Resume.pdf`. Verify local, built,
  and (when publishing) deployed copies match. Keep the homepage and CV-page
  download links working. The resume is a curated subset, not the full CV.
