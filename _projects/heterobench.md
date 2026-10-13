---
layout: page
title: "HeteroBench"
description: "Multi-kernel benchmarks for heterogeneous systems."
importance: 2
category: research
related_publications: false
---

HeteroBench is a vendor-agnostic benchmark suite for evaluating multi-kernel applications across diverse accelerators and programming models, including Python, OpenMP, OpenACC, CUDA, and Vitis HLS. It received the ICPE 2025 Best Paper Award - Artifact Track.

As lead developer, I designed and implemented the suite's 11 multi-kernel applications, spanning image processing, machine learning, numerical computation, and physical simulation, with Python, OpenMP, CUDA, and HLS implementations for CPUs, GPUs, and FPGAs. I also built a JSON-configured Python driver with Jinja-generated Makefiles for backend-specific builds, benchmark execution, profiler integration, and experiment logging. The project started at UC Irvine in March 2024 and was completed during my 2024 internship at Hewlett Packard Labs.

Links: [paper](https://doi.org/10.1145/3676151.3719366), [GitHub](https://github.com/HewlettPackard/HeteroBench), [SPEC RG Tools](https://research.spec.org/tools/overview/heterobench/).
