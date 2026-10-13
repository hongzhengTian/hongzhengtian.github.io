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

The framework is designed for applications whose task graph and input sizes are known before execution, so schedules can be optimized offline. Its scheduling concepts later informed CoVA.
