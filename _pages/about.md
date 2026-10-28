---
layout: about
title: about
permalink: /
subtitle: Ph.D. Candidate in Computer Engineering, University of California, Irvine

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>EECS, UC Irvine</p>
    <p>CORSA Research Group</p>
    <p>hongzhet [at] uci [dot] edu</p>

selected_papers: true
social: false

announcements:
  enabled: true
  scrollable: true
  limit: 12

latest_posts:
  enabled: false
---

I am a Ph.D. candidate in Computer Engineering at the [EECS Department](https://engineering.uci.edu/dept/eecs) of the [University of California, Irvine](https://uci.edu/), advised by Prof. [Sitao Huang](https://engineering.uci.edu/users/sitao-huang) in the [CORSA](https://corsa.eng.uci.edu/) research group. I expect to graduate in June 2027.

My research focuses on **compilers and runtime systems for heterogeneous computing**. My thesis project, [CoVA](/projects/cova/) (Compiler for Versatile Architectures), is an MLIR-based compiler that maps NumPy programs to CPUs and GPUs. Related projects include [HeteroTask](/projects/heterotask/), a distributed task runtime with offline DAG scheduling for CPU/GPU nodes, and [HeteroBench](/projects/heterobench/), a CPU/GPU/FPGA benchmark suite that received the ICPE 2025 Best Paper Award - Artifact Track.

I am broadly interested in compiler infrastructure for heterogeneous systems, performance portability, accelerator design automation, and practical tools that help researchers and developers reason about efficiency across modern hardware.

**I am on the job market** and looking for full-time roles in compilers and heterogeneous computing starting in 2027.

<style>
  .post-header .post-title::after {
    content: " 田宏铮";
    font-size: 0.7em;
    font-weight: 400;
  }

  .bio-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem 0.45rem;
    margin: 0.75rem 0 1.1rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  .bio-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    white-space: nowrap;
  }

  .bio-links i {
    width: 1em;
    font-size: 1em;
    text-align: center;
  }

  .bio-links .separator {
    color: var(--global-text-color-light);
  }
</style>

<div class="bio-links" aria-label="Profile links">
  <a href="{{ site.data.socials.cv_pdf }}" title="CV"><i class="ai ai-cv"></i><span>CV</span></a>
  <span class="separator">/</span>
  <a href="/assets/pdf/HongzhengTian_Resume.pdf" title="One-page resume for compiler and heterogeneous computing roles"><i class="fa-solid fa-file-pdf"></i><span>Resume (1 page)</span></a>
  <span class="separator">/</span>
  <a href="mailto:{{ site.data.socials.email }}" title="Email"><i class="fa-solid fa-envelope"></i><span>Email</span></a>
  <span class="separator">/</span>
  <a href="https://github.com/{{ site.data.socials.github_username }}" title="GitHub" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i><span>GitHub</span></a>
  <span class="separator">/</span>
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.google_scholar_id }}&amp;hl=en" title="Google Scholar" rel="external nofollow noopener" target="_blank"><i class="ai ai-google-scholar"></i><span>Google Scholar</span></a>
  <span class="separator">/</span>
  <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}" title="LinkedIn" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-linkedin"></i><span>LinkedIn</span></a>
</div>
