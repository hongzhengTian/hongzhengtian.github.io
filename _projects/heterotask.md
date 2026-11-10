---
layout: page
title: "HeteroTask"
description: "Offline DAG scheduling and distributed CPU/GPU execution."
importance: 3
category: research
related_publications: false
---

**Jan. 2025 - Apr. 2026**

HeteroTask is a distributed heterogeneous task runtime that I developed as sole developer at UC Irvine.

- Built a DAG execution framework with task-variant profiling, memory-aware device and variant selection, communication-cost modeling, and buffer lifetime planning.
- Implemented a C++/MPI runtime that executes planned task placements, dependency transfers, and buffer allocation and release across CPU/GPU nodes.
- Added PEFT-based multi-variant planning and a Bayesian-optimization loop that calibrates empirical overhead corrections for repeated, fixed-DAG workflows.
- Evaluated five benchmark and workflow-derived applications on up to six 8-GPU nodes; on two nodes, HeteroTask reduced application completion time by 19.7–72.1% relative to StarPU.

The framework is designed for applications whose task graph and input sizes are known before execution, so schedules can be optimized offline. Its scheduling concepts later informed CoVA.

Paper: [HeteroTask: Multi-Variant Task Scheduling and Execution on Distributed Heterogeneous Clusters](https://arxiv.org/abs/2611.10055) (arXiv preprint, 2026).
