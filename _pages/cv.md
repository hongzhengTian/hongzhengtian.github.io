---
layout: page
title: CV
permalink: /cv/
description: A web version of my curriculum vitae, with a link to the latest PDF.
nav: true
nav_order: 5
toc:
  sidebar: left
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="/assets/pdf/HongzhengTian_CV.pdf" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-file-pdf"></i> Download PDF
  </a>
</p>

## Contact

- **Email:** [hongzhet@uci.edu](mailto:hongzhet@uci.edu)
- **GitHub:** [github.com/hongzhengTian](https://github.com/hongzhengTian)
- **LinkedIn:** [linkedin.com/in/hongzhengtian](https://www.linkedin.com/in/hongzhengtian/)
- **Website:** [hongzhengtian.com](https://www.hongzhengtian.com/)

## Education

- **University of California, Irvine (UCI)**, CA, USA
  Ph.D. in Computer Engineering, Sep. 2022 - Jun. 2027 expected.

- **University of California, Irvine (UCI)**, CA, USA
  Master's Degree in Computer Engineering, Sep. 2020 - Jun. 2022.

- **University of California, Riverside (UCR)**, CA, USA
  UCR Graduate Preparation Program in Engineering, Aug. 2019 - Jun. 2020.

- **University of British Columbia (UBC)**, BC, Canada
  Vancouver Summer Program in Communication Systems and Digital Systems Design with FPGA, Jul. 2018 - Aug. 2018.

- **Northwestern Polytechnical University (NWPU)**, Shaanxi, China
  Bachelor of Engineering in Microelectronics Science and Engineering, Sep. 2016 - Jun. 2020.

## Scholarships And Awards

- **Best Paper Award - Artifact Track**, ICPE 2025, May 2025.
- **Nominated for Electrical Engineering and Computer Science Professor/Graduate Student/Undergraduate Student of the Year Award**, UCI, Mar. 2024.
- **Second-class Scholarship for Outstanding Student**, NWPU, Dec. 2017 and Dec. 2018.
- **Second Prize**, The 19th Undergraduate Mathematical Contest in Modelling, NWPU, Jun. 2018.

## Skills

- **Languages:** C, C++, OpenMP, Python, Verilog HDL, VHDL, MATLAB.
- **Software And Tools:** Xilinx Design Tools, Synopsys, Cadence, Quartus, ModelSim, MATLAB.

## Researches And Publications

### HeteroBench: Multi-kernel Benchmarks For Heterogeneous Systems

**Mar. 2024 - Aug. 2024**
Project jointly supervised by the CORSA Lab, UCI and Hewlett Packard Labs.
Advisors: Prof. Sitao Huang and Dr. Alok Mishra.

Built a cross-platform benchmark suite for evaluating heterogeneous HPC workloads across CPUs, GPUs, and FPGAs using Python, OpenMP, CUDA, and HLS.

- Publication: [ICPE 2025](https://doi.org/10.1145/3676151.3719366), [SPEC RG Tools](https://research.spec.org/tools/overview/heterobench/)
- Code: [HewlettPackard/HeteroBench](https://github.com/HewlettPackard/HeteroBench)
- Award: Best Paper Award - Artifact Track

### CoVA: An MLIR-Based Compilation Flow For Versatile Architecture

**Jun. 2023 - Sep. 2023**
Project jointly supervised by the CORSA Lab, UCI and Hewlett Packard Labs.
Advisors: Prof. Sitao Huang and Dr. Alok Mishra.

Built an MLIR-based compilation flow for heterogeneous backend devices, enhancing code portability and efficiency.

- Publication: [SC 2024 ACM Student Research Competition Poster](https://sc24.supercomputing.org/proceedings/poster/poster_pages/post190.html)

### A Sparsity-Aware Autonomous Path Planning Accelerator With Algorithm-Architecture Co-Design

**Jan. 2023 - Sep. 2023**
Project jointly supervised by the CORSA Lab, UCI and the School of Cyberspace Science and Technology, Beijing Institute of Technology.
Advisors: Prof. Sitao Huang, Prof. Yanjun Zhang, and Dr. Bo Yu.

Implemented the attention module based on Versal ACAP AI Engines, with kernel fusion applied.

- Publication: [ICCAD 2024](https://dl.acm.org/doi/abs/10.1145/3676536.3676700)
- Poster: [FPGA 2024](https://dl.acm.org/doi/abs/10.1145/3626202.3637597)

### PyAIE: A Python-Based Programming Framework For Versal ACAP AI Engines

**Sep. 2022 - Jun. 2023**
Project at the CORSA Lab, UCI.
Advisor: Prof. Sitao Huang.

Built a Python-based code generator targeting Versal ACAP AI Engines.

- Publication: [DAC 2023 Late Breaking Results](https://ieeexplore.ieee.org/abstract/document/10247843)

### Design Exploration Of Associative Processor Implementation On FPGA

**Apr. 2021 - Feb. 2022**
Project at the Center for Embedded and Cyber-physical Systems, UCI.
Advisors: Prof. Fadi J. Kurdahi, Dr. Mohammed E. Fouda, and Dr. Minjun Seo.

Built a new FPGA implementation of an associative processor.

- Publications: [ISCAS 2023](https://iscas2023.org/) and [IEEE TCAS-II](https://ieeexplore.ieee.org/abstract/document/10081044)

## Internships

### Hewlett Packard Enterprise - Research Associate Intern

**HeteroBench: A Benchmark Suite For Heterogeneous Computing Systems**
**Jun. 2024 - Sep. 2024**

Developed a benchmarking framework to evaluate performance and scalability across heterogeneous computing platforms.

- Designed and implemented a benchmark suite for evaluating heterogeneous systems across CPUs, GPUs, and accelerators.
- Developed profiling and measurement methodologies to capture performance, scalability, and resource utilization across diverse workloads.
- Conducted experimental evaluations to analyze system behavior across different scheduling and execution strategies.
- Provided insights into performance variability across architectures, supporting system optimization and scheduling research.

### Hewlett Packard Enterprise - Research Associate Intern

**CoVA: An MLIR-Based Compilation Flow For Versatile Architecture**
**Jun. 2023 - Sep. 2023**

Built an MLIR-based compilation flow for heterogeneous backend devices, enhancing code portability and efficiency.

- Learned the MLIR framework and the compilation flow from MLIR to LLVM IR, including Python bindings integration.
- Designed custom MLIR dialects to abstract program semantics from hardware specifics, enabling integration of high-level languages including Python, C/C++, and Fortran.
- Implemented analysis and transformation passes for optimization and lowering to heterogeneous backends, including CPUs, GPUs, and FPGAs.
- Built a flexible compilation flow to improve portability and performance across diverse hardware platforms.

### IMBED LLC - Development Engineer Trainee

**Design Of MQ Decoder For A Real-Time JPEG2000 Player Based On FPGA**
**Sep. 2021 - Jan. 2022**

Designed components for a real-time JPEG2000 player for digital cinema applications.

- Implemented C code for the JPEG2000 decoder according to the JPEG2000 official document.
- Wrote and simulated the tier-1 entropy decoder, MQ decoder, in Verilog HDL.
- Studied improvement methods for MQ decoders from related literature.
- Optimized the decoder to meet timing and throughput constraints.
- Evaluated performance up to 450 MHz.

## Undergraduate Projects

### Design Of Digital Multi-Channel Lock-In Amplifier Based On FPGA

**Sep. 2019 - Mar. 2020**
Senior design at the Bourns College of Engineering, UCR.
Advisor: Prof. Shane Cybart.

Co-designed a multi-channel lock-in amplifier based on FPGA to extract a desired signal with a known carrier wave from an extremely noisy environment.

- Designed the digital phase-locked loop to synchronize the external input reference signal.
- Designed the reference signal generator to generate the internal reference square signal.
- Designed the vector calculator for output vectors from the IIR filter.
- Built a final system that can extract a 0.5 uV sinusoidal signal from 500 mVpp white noise.

### Design Of Convolutional Neural Network Based On FPGA

**Sep. 2019 - Dec. 2019**
Research at the Bourns College of Engineering, UCR.
Advisor: Prof. Philip Brisk.

Assisted in the design of an FPGA-based convolutional neural network for processing medical images.

- Self-studied artificial intelligence and CNN fundamentals, and became familiar with the lab's C++ CNN code.
- Learned how to improve CNN performance on FPGA.
- Used Vivado HLS to translate high-level code to Verilog HDL and package the design as an IP for further tests and experiments.

### Design Of A Q-Learning Algorithm To Solve The Find-Path Problem

**May 2020 - Jun. 2020**
EE XRC260 course project, UCR.
Advisor: Prof. Sheldon Tan.

Built a program that finds the correct path through a maze using Q-learning.

- Studied fundamentals of reinforcement learning.
- Learned the Markov decision process and Deep Q-Learning algorithms.
- Implemented the algorithm in MATLAB and designed a program to find the shortest correct path out of a maze.

### Design And Manufacture Of AM/FM Radios

**May 2018 - Jun. 2018**
Electronic practice at the Training Center of Engineering, NWPU.

- Explored the principles and structures of AM/FM radios.
- Learned welding skills for electronic components.
- Welded a radio and completed related commissioning and assembly work.

### Undergraduate Mathematical Contest In Modelling

**May 2018**
Northwestern Polytechnical University.

- Designed a mathematical model using cluster analysis and hierarchical analysis to analyze text from topology and logical structures.
- Used MATLAB to count the frequency of each character in each paragraph to determine whether the contents of a book were written by the same author.

## Activities

- **Young Fellow Program of the 60th Design Automation Conference**, poster presentation.
- **SC24 ACM Student Research Competition**, [poster presentation](https://sc24.supercomputing.org/program/posters/acm-student-research-competition/).
- **LATTE 2023, Workshop on Languages, Tools, and Techniques for Accelerator Design**, presentation for "PyAIE: A Python-based Compiler Framework for Versal ACAP Platforms."

## Related Courses

**University of California, Irvine**

- EECS 222 Embedded System Modeling: A.
- EECS 226 Embedded System Software: A.
- EECS 221 Languages and Compilers for Hardware Accelerators: A.

**University of California, Riverside**

- EE XRC 139 Solid-state Electronics: A.
- EE XRC 146 Computer Vision: A.
- EE XRC 168 Introduction of VLSI Design: A+.
- EE XRC 260 Seminar in Electrical Engineering, Advanced VLSI: A+.

## Teaching

- **Teaching Assistant**, EECS 112 Computer Architecture, Fall 2023.

## Extracurricular Activities

### Astronomical Society, Northwestern Polytechnical University

**Theory Department Undersecretary and Photography Team Leader**
**Aug. 2017 - Jun. 2018**

- Taught starry-sky photography and organized teammates to conduct field photography and contribute work to university platforms.
- Taught and popularized astronomical knowledge by organizing lectures and competitions.
- Selected topics for the Starry Sky Carnival Competition and served as a question setter and judge for the Astronomical Joint Competition for universities and colleges in Shaanxi Province.

### Student Union Of The School Of Software And Microelectronics, Northwestern Polytechnical University

**Learning Department Secretary**
**Aug. 2017 - Jun. 2018**

- Organized school activities and affairs with department members.
- Helped students clarify learning problems.
- Hosted learning experience exchange meetings and academic lectures.
- Organized subject knowledge competitions and debate contests by selecting and training debaters.
- Prepared questions for an advanced mathematics exam, invigilated the exam, and marked papers.
