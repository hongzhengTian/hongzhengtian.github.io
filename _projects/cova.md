---
layout: page
title: "CoVA"
description: "An MLIR-based compilation flow for versatile architecture."
importance: 3
category: research
related_publications: true
---

CoVA is my ongoing doctoral research at UC Irvine, continuing the project begun during my 2023 HPE research internship. It is an MLIR-based compiler for numerical Python workloads on heterogeneous systems.

Built a numerical Python compiler integrating custom MLIR passes with upstream bufferization and lowering infrastructure for CPU LLVM/OpenMP and NVIDIA GPU LLVM/NVVM backends. Implemented loop and region storage analyses to prove independence and enable GPU-resident buffers where safe, GPU thread mapping, and fixed-group reduction trees with results independent of physical thread count for supported reductions. Implemented stream and temporary-buffer reuse and analysis-guided synchronization; evaluated correctness and performance with NPBench and paired measurements. FPGA support remains experimental.

Link: [SC24 ACM Student Research Competition poster](https://sc24.supercomputing.org/proceedings/poster/poster_pages/post190.html).
