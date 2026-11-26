---
layout: page
title: "CoVA"
description: "Compiler for Versatile Architectures: an MLIR-based compiler for CPUs and GPUs."
importance: 1
category: research
related_publications: false
---

**Jun. 2023 - Present**

CoVA (Compiler for Versatile Architectures) is my Ph.D. thesis project at UC Irvine: an MLIR-based compiler that maps NumPy programs to CPUs and GPUs. I am its sole developer. The project was initiated during my 2023 research internship at Hewlett Packard Labs, where I built its initial framework: a custom MLIR dialect, MLIR-to-LLVM lowering, and Python bindings.

- **Compiler:** a custom MLIR dialect (38 ops) and 31 passes on top of upstream bufferization, lowering to six CPU/GPU code-generation routes (LLVM, OpenMP CPU/GPU, EmitC C++, and NVVM).
- **Analyses and GPU code generation:** region-level storage and placement analyses that prove loop independence and keep buffers GPU-resident across control flow; GPU thread-block mapping; deterministic reductions whose results are independent of thread count.
- **Runtime:** stream and scratch-buffer reuse, and analysis-guided execution ordering that chooses between whole-call submission and segmented synchronization.
- **Distributed execution:** profiling-driven offline scheduling and an MPI runtime that runs compiled and native CPU/GPU task implementations across nodes, with GPU-resident data and same-host CUDA IPC transfers. This continues the scheduling work that began in [HeteroTask](/projects/heterotask/).
- **PyTorch path:** torch.export/AOTInductor packaging into persistent `.pt2` executables with verified Triton pattern specialization.
- **Evaluation:** all 53 evaluated NPBench programs pass strict validation on both CPU and GPU, compared with NumPy, Numba, DaCe, CuPy, and JAX. A paper describing CoVA is under review.

Link: [SC24 ACM Student Research Competition poster](https://sc24.supercomputing.org/proceedings/poster/poster_pages/post190.html).
