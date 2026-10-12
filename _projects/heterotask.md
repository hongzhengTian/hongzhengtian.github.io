---
layout: page
title: "HeteroTask"
description: "Offline DAG scheduling and distributed CPU/GPU execution."
importance: 2
category: research
related_publications: false
---

**Jan. 2025 - Apr. 2026**

Independently built a DAG execution framework with task-variant profiling, memory-aware device/variant selection, communication-cost modeling, and buffer lifetime planning. Implemented a C++/MPI runtime to execute planned task placements, dependency transfers, and buffer allocation/free operations. The project is complete; its scheduling concepts later informed CoVA.

The framework profiles task variants, constructs offline schedules, and executes those schedules through a C++/MPI runtime. It targets applications whose DAG and input size are known before execution; it does not perform online global rescheduling.
