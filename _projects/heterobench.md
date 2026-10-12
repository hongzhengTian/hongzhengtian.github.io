---
layout: page
title: "HeteroBench"
description: "Multi-kernel benchmarks for heterogeneous systems."
importance: 1
category: research
related_publications: true
---

HeteroBench is a vendor-agnostic benchmark suite for evaluating multi-kernel applications across diverse accelerators and programming models, including Python, OpenMP, OpenACC, CUDA, and Vitis HLS.

Independently implemented a CPU/GPU/FPGA benchmark suite using Python, OpenMP, CUDA, and HLS. Built a JSON-configured Python driver with Jinja-generated Makefiles for backend-specific builds, benchmark execution, profiler integration, and experiment logging.

Links: [paper](https://doi.org/10.1145/3676151.3719366), [GitHub](https://github.com/HewlettPackard/HeteroBench), [SPEC RG Tools](https://research.spec.org/tools/overview/heterobench/).
