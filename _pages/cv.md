---
layout: page
title: CV
permalink: /cv/
description: A web version of my curriculum vitae, with downloads for the full CV and one-page resume.
nav: true
nav_order: 5
toc:
  sidebar: left
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="/assets/pdf/HongzhengTian_CV.pdf" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-file-pdf"></i> Full CV (PDF)
  </a>
  <a class="btn btn-sm btn-outline-primary" href="/assets/pdf/HongzhengTian_Resume.pdf" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-file-pdf"></i> One-page Resume (PDF)
  </a>
</p>

The one-page resume focuses on compiler and heterogeneous computing roles.

## Contact

- **Email:** [hongzhet@uci.edu](mailto:hongzhet@uci.edu)
- **GitHub:** [github.com/hongzhengTian](https://github.com/hongzhengTian)
- **LinkedIn:** [linkedin.com/in/hongzhengtian](https://www.linkedin.com/in/hongzhengtian/)
- **Google Scholar:** [Publication profile](https://scholar.google.com/citations?user=rPGeWEUAAAAJ)
- **Website:** [hongzhengtian.com](https://hongzhengtian.com/)

## Education

- **University of California, Irvine (UCI)**, Irvine, CA, USA
  Ph.D. in Computer Engineering, Sep. 2022 – Jun. 2027 (expected). Advisor: Prof. Sitao Huang.

- **University of California, Irvine (UCI)**, Irvine, CA, USA
  M.S. in Electrical and Computer Engineering, Sep. 2020 – Jun. 2022.

- **University of California, Riverside (UCR)**, Riverside, CA, USA
  UCR Graduate Preparation Program in Engineering (UCR-GPP-E), one-year exchange program, Aug. 2019 – Jun. 2020.

- **University of British Columbia (UBC)**, Vancouver, BC, Canada
  Vancouver Summer Program in Communication Systems and Digital Systems Design with FPGA, Jul. 2018 – Aug. 2018.

- **Northwestern Polytechnical University (NWPU)**, Xi'an, Shaanxi, China
  B.Eng. in Microelectronics Science and Engineering, Sep. 2016 – Jun. 2020.

## Research Experience

### CoVA: Compiler for Versatile Architectures (Ph.D. Thesis)

**Jun. 2023 – Present**
CORSA Lab, UCI; initiated during the 2023 HPE internship.
Advisor: Prof. Sitao Huang. Mentor: Dr. Alok Mishra (Hewlett Packard Labs). Role: Sole developer.

- Built an MLIR-based compiler for NumPy programs: a custom dialect (38 ops) and 30 passes on top of upstream bufferization, lowering to six CPU/GPU code-generation routes (LLVM, OpenMP CPU/GPU, EmitC C++, and NVVM).
- On CPU, achieved a 3.5× geomean speedup over NumPy across 53 NPBench workloads, outperforming Numba and DaCe; 53/54 CPU and 52/54 GPU workloads pass strict golden-reference checks.
- Designed region-level storage and alias analyses that prove loop independence and keep buffers GPU-resident across control flow; implemented GPU thread-block mapping and deterministic reductions whose results are independent of thread count.
- Implemented stream and scratch-buffer reuse and analysis-guided segmented synchronization in the CUDA runtime.
- Built a PyTorch path that packages models into persistent `.pt2` executables through torch.export and AOTInductor, with verified Triton pattern specialization; runs end-to-end GPT-2 generation.
- Publication: [SC24 ACM Student Research Competition Poster](https://sc24.supercomputing.org/proceedings/poster/poster_pages/post190.html) [S4]

### HeteroTask: Distributed Heterogeneous Task Runtime

**Jan. 2025 – Apr. 2026**
CORSA Lab, UCI. Role: Sole developer.

- Built a DAG execution framework with task-variant profiling, memory-aware device and variant selection, communication-cost modeling, and buffer lifetime planning.
- Implemented a C++/MPI runtime that executes planned task placements, dependency transfers, and buffer allocation and release across CPU/GPU nodes; its scheduling concepts later informed CoVA.

### PyAIE: A Python-based Programming Framework for Versal ACAP

**Sep. 2022 – Jun. 2023**
CORSA Lab, UCI. Advisor: Prof. Sitao Huang. Role: Led design and implementation.

- Built a Python-based framework that generates AI Engine kernels (with AIE vector intrinsics), programmable-logic and host code, and configuration scripts for AMD Versal ACAP.
- Publications: [DAC 2023 Late Breaking Results](https://ieeexplore.ieee.org/abstract/document/10247843) [S2]; [LATTE 2023](https://capra.cs.cornell.edu/latte23/paper/10.pdf) [S1]

### A Sparsity-Aware Autonomous Path Planning Accelerator with Algorithm-Architecture Co-Design

**Jan. 2023 – Sep. 2023**
Joint project of the CORSA Lab, UCI and the School of Cyberspace Science and Technology, Beijing Institute of Technology.
Advisors: Prof. Sitao Huang, Prof. Yanjun Zhang, and Dr. Bo Yu.

- FPGA-based acceleration of autonomous path planning, focusing on sparse matrix-vector multiplication and preconditioned conjugate gradient (PCG) computation for quadratic programming.
- Publications: [ACM TACO 2025](https://doi.org/10.1145/3750449) [J2]; [ICCAD 2024](https://dl.acm.org/doi/abs/10.1145/3676536.3676700) [C1]; [FPGA 2024 Poster](https://dl.acm.org/doi/abs/10.1145/3626202.3637597) [S3]

### SAMT: Optimized Spatial Architecture Mapping Flow for Transformer Accelerators

CORSA Lab, UCI.

- A framework for optimizing dataflow mappings of Transformer inference workloads on spatial accelerators, combining mapping search with dynamic operator fusion to improve latency and energy efficiency across edge, mobile, and cloud platforms.
- Publication: [arXiv:2410.07407, 2024](https://arxiv.org/abs/2410.07407) [P1]

### Design Exploration of Associative Processor Implementation on FPGA

**Apr. 2021 – Feb. 2022**
Center for Embedded and Cyber-physical Systems (CECS), UCI.
Advisors: Prof. Fadi J. Kurdahi, Dr. Mohammed E. Fouda, and Dr. Minjun Seo.

- Designed and implemented an FPGA-based associative processor for in-memory computing, including content addressable memory and supporting circuits (controller, data and instruction caches, and program counter).
- Publication: [IEEE TCAS-II 2023](https://ieeexplore.ieee.org/abstract/document/10081044), presented at [ISCAS 2023](https://iscas2023.org/) [J1]

## Industry Experience

### Hewlett Packard Enterprise (Hewlett Packard Labs) - Research Associate Intern, 2024

**Jun. 2024 – Sep. 2024**, Milpitas, CA
_HeteroBench: Multi-kernel Benchmarks for Heterogeneous Systems._ Role: Lead developer.
Jointly supervised by Prof. Sitao Huang (CORSA Lab, UCI) and Dr. Alok Mishra (Hewlett Packard Labs); started at UCI in Mar. 2024 and completed during the internship.

- Led development of a benchmark suite of 11 multi-kernel applications spanning image processing, machine learning, numerical computation, and physical simulation, with Python, OpenMP, CUDA, and HLS implementations for CPUs, GPUs, and FPGAs.
- Built a JSON-configured Python driver with Jinja-generated Makefiles for backend-specific builds, benchmark execution, profiler integration, and experiment logging.
- Best Paper Award - Artifact Track at ICPE 2025 [C2]; open-sourced as [HewlettPackard/HeteroBench](https://github.com/HewlettPackard/HeteroBench) and listed in [SPEC RG Tools](https://research.spec.org/tools/overview/heterobench/).

### Hewlett Packard Enterprise (Hewlett Packard Labs) - Research Associate Intern, 2023

**Jun. 2023 – Sep. 2023**, Milpitas, CA
_CoVA: Compiler for Versatile Architectures._

- Built CoVA's initial compilation framework: a custom MLIR dialect separating high-level program semantics from target-specific lowering, MLIR-to-LLVM lowering, and Python bindings.
- Implemented compiler analysis and transformation passes for the heterogeneous compilation flow; the project continued as my Ph.D. thesis.
- This work led to a U.S. patent application with Hewlett Packard Enterprise, now allowed [PT1].

### IMBED LLC - Development Engineer Trainee

**Sep. 2021 – Jan. 2022**
_MQ Decoder for a Real-Time FPGA-based JPEG2000 Player for Digital Cinema._

- Implemented the JPEG2000 decoder in C according to the official JPEG2000 specification.
- Designed and simulated the tier-1 entropy decoder (MQ decoder) in Verilog HDL, drawing on published MQ-decoder improvements.
- Optimized the decoder to meet timing and throughput constraints, reaching up to 450 MHz.

## Publications

See also the [publications page](/publications/) and [Google Scholar](https://scholar.google.com/citations?user=rPGeWEUAAAAJ). Patents are listed in the next section.

### Conference Papers

- **[C2]** **H. Tian**, A. Mishra, Z. Chen, R. P. Hong Enriquez, D. Milojicic, E. Frachtenberg, and S. Huang. "HeteroBench: Multi-kernel Benchmarks for Heterogeneous Systems." _Proceedings of the 16th ACM/SPEC International Conference on Performance Engineering (ICPE)_, pp. 320–333, 2025. **Best Paper Award - Artifact Track.** [DOI](https://doi.org/10.1145/3676151.3719366)
- **[C1]** Y. Zhang, X. Niu, Y. Zhang, **H. Tian**, B. Yu, S. Liu, and S. Huang. "A Sparsity-Aware Autonomous Path Planning Accelerator with Algorithm-Architecture Co-Design." _Proceedings of the 43rd IEEE/ACM International Conference on Computer-Aided Design (ICCAD)_, 2024. [DOI](https://doi.org/10.1145/3676536.3676700)

### Journal Articles

- **[J2]** Y. Zhang, X. Niu, **H. Tian**, Y. Zhang, B. Yu, S. Liu, and S. Huang. "A Sparsity-Aware Autonomous Path Planning Accelerator with HW/SW Co-Design and Multi-Level Dataflow Optimization." _ACM Transactions on Architecture and Code Optimization (TACO)_, 22(3):1–25, 2025. [DOI](https://doi.org/10.1145/3750449)
- **[J1]** **H. Tian**, M. E. Fouda, M. Seo, and F. J. Kurdahi. "FPGA Implementation of Associative Processors." _IEEE Transactions on Circuits and Systems II: Express Briefs_, 70(5):1774–1778, 2023. Presented at ISCAS 2023. [DOI](https://doi.org/10.1109/TCSII.2023.3261702)

### Short Papers, Posters, and Workshop Papers

- **[S4]** **H. Tian**, A. Mishra, and S. Huang. "CoVA: Compiler for Versatile Architectures." _ACM Student Research Competition Poster, SC24_, 2024. [Poster page](https://sc24.supercomputing.org/proceedings/poster/poster_pages/post190.html)
- **[S3]** X. Niu, Y. Zhang, Y. Zhang, **H. Tian**, B. Yu, S. Liu, and S. Huang. "Accelerating Autonomous Path Planning on FPGAs with Sparsity-Aware HW/SW Co-Optimizations." _ACM/SIGDA International Symposium on Field Programmable Gate Arrays (FPGA)_, poster, 2024. [DOI](https://doi.org/10.1145/3626202.3637597)
- **[S2]** **H. Tian**, S. Yang, Y. Cha, and S. Huang. "Late Breaking Results: PyAIE: A Python-based Programming Framework for Versal ACAP Platforms." _60th ACM/IEEE Design Automation Conference (DAC)_, pp. 1–2, 2023. [DOI](https://doi.org/10.1109/DAC56929.2023.10247843)
- **[S1]** **H. Tian**, S. Yang, Y. Cha, and S. Huang. "PyAIE: A Python-based Compiler Framework for Versal ACAP Platforms." _Workshop on Languages, Tools, and Techniques for Accelerator Design (LATTE)_, 2023. [PDF](https://capra.cs.cornell.edu/latte23/paper/10.pdf)

### Preprints

- **[P1]** H. Xu, F. Tahmasebi, Y. Qiao, **H. Tian**, H. Kwon, and S. Huang. "Optimized Spatial Architecture Mapping Flow for Transformer Accelerators." _arXiv:2410.07407_, 2024. [arXiv](https://arxiv.org/abs/2410.07407)

## Patents

- **[PT1]** A. Mishra, **H. Tian**, R. P. Hong Enriquez, M. P. Dziubinski, X. Zhan, and D. S. Milojicic. "Microarchitectural-Neutral Automatic Type and Shape Inference and Cross-Microarchitecture Invocation." U.S. Patent Application No. 18/678,875, filed May 30, 2024; published as US 2025/0370738 A1. **Allowed** (Notice of Allowance, 2026). Assignee: Hewlett Packard Enterprise. [Google Patents](https://patents.google.com/patent/US20250370738A1/en)

## Honors and Awards

- **Best Paper Award - Artifact Track**, ICPE 2025, May 2025. For _HeteroBench: Multi-kernel Benchmarks for Heterogeneous Systems_.
- **Nominee, EECS Graduate Student of the Year Award**, UC Irvine, Mar. 2024.
- **Second-class Scholarship for Outstanding Students**, NWPU, Dec. 2017 and Dec. 2018.
- **Second Prize**, 19th Undergraduate Mathematical Contest in Modelling, NWPU, Jun. 2018.

## Teaching

- **Teaching Assistant**, EECS 112L Organization of Digital Computers Laboratory, UC Irvine, Fall 2026.
- **Teaching Assistant**, EECS 112 Organization of Digital Computers, UC Irvine, Fall 2023.

## Presentations and Activities

- Invited session chair and speaker, "Benchmarking in the Data Center: Expanding to the Cloud" Workshop at ICPE 2025. Declined due to travel constraints.
- Poster presentation, [SC24 ACM Student Research Competition](https://sc24.supercomputing.org/program/posters/acm-student-research-competition/), Atlanta, GA, 2024.
- Poster presentation, UCI GEECS Showcase, Irvine, CA, 2024.
- Poster presentation, Young Fellow Program, [60th Design Automation Conference](https://www.dac.com/Attend/Students-Scholarships/Young-Student-Fellow-Program), San Francisco, CA, 2023.
- Presentation of PyAIE [S1], [LATTE '23](https://capra.cs.cornell.edu/latte23/), Workshop on Languages, Tools, and Techniques for Accelerator Design, 2023.

## Skills

- **Programming:** C, C++, Python, Verilog HDL, VHDL, MATLAB.
- **Compilers and ML systems:** MLIR, LLVM/NVVM, OpenMP offloading, EmitC; PyTorch (torch.export, AOTInductor), Triton, torch-mlir.
- **Parallel computing:** OpenMP, MPI, CUDA, high-level synthesis (Vitis HLS).
- **EDA and tools:** AMD/Xilinx Vivado and Vitis, Synopsys, Cadence, Quartus, ModelSim.

## Undergraduate Projects

### Digital Multi-Channel Lock-in Amplifier Based on FPGA (Senior Design)

**Sep. 2019 – Mar. 2020**
Bourns College of Engineering, UCR. Advisor: Prof. Shane Cybart.

- Co-designed an FPGA-based multi-channel lock-in amplifier that extracts a signal with a known carrier wave from an extremely noisy environment.
- Designed the digital phase-locked loop that synchronizes to the external reference signal, the internal square-wave reference generator, and the vector calculator for the IIR filter outputs.
- The final system extracts a 0.5 µV sinusoidal signal from 500 mVpp white noise.

### Convolutional Neural Network (CNN) Based on FPGA

**Sep. 2019 – Dec. 2019**
Bourns College of Engineering, UCR. Advisor: Prof. Philip Brisk.

- Assisted in designing an FPGA-based CNN for processing medical images; studied CNN fundamentals and the lab's C++ CNN implementation.
- Used Vivado HLS to translate the C++ design to Verilog HDL and packaged it as an IP core for further tests and experiments.

### Q-Learning for the Maze Path-Finding Problem (EE XRC 260 Course Project)

**May 2020 – Jun. 2020**
UCR. Instructor: Prof. Sheldon Tan.

- Studied Markov decision processes and (deep) Q-learning, and implemented Q-learning in MATLAB to find the shortest path out of a maze.

### Undergraduate Mathematical Contest in Modelling, NWPU (Second Prize)

**May 2018**

- Designed a model using cluster analysis and hierarchical analysis of a text's topological and logical structure, and used MATLAB character-frequency statistics to determine whether a book was written by a single author.

## Extracurricular Activities

### Astronomical Society, Northwestern Polytechnical University

**Theory Department Undersecretary and Photography Team Leader**
**Aug. 2017 – Jun. 2018**

- Organized astronomy lectures, competitions, and night-sky photography field trips; served as question setter and judge for the Astronomical Joint Competition for Universities and Colleges in Shaanxi Province.

### Student Union of the School of Software and Microelectronics, Northwestern Polytechnical University

**Learning Department Secretary**
**Aug. 2017 – Jun. 2018**

- Organized academic lectures, study-experience meetings, subject competitions, and debate contests; helped students resolve coursework questions; set, proctored, and graded an advanced mathematics exam.
