---
layout: page
title: Underwater Vehicle with Dual Manipulators
description: (HUST) Design and simulation analysis of an underwater vehicle with dual manipulators
img: assets/img/UVMS1.png
importance: 4
category: Robotics
related_publications: true
---

This project was my undergraduate thesis, supervised by Prof. Xianbo Xiang at the School of Naval Architecture and Ocean Engineering, Huazhong University of Science and Technology. Two papers were published in this project: {% cite bi2019underwater xiang2019underwater%}

---
## Design, Hydrodynamics analysis and computation

#### Overview
This project advances autonomous underwater vehicle (AUV) capabilities by equipping them with two 4‑DOF manipulators and integrated claws, which called Undewater Vehicle-Manipulator System (UVMS) The focus is on analyzing the hydrodynamic performance and interactions between the dual arms, laying the foundation for more complex coordination in subsea operations.

#### Mechanical Design & Simulation
A compact, lightweight dual-manipulator structure is designed and modeled. The simplicity of the arms—each with 4 degrees of freedom and claw end-effectors—supports effective underwater grasping while minimizing drag.

#### Hydrodynamic Analysis
Using theoretical and computational methods, the study calculates drag forces, added mass, and coupling effects on each manipulator during motion. Simulations include steady and unsteady hydrodynamics, critical for predicting how the manipulators affect AUV behavior and stability in water .

#### Computational Methods
Efficient CFD-based numerical simulations, likely based on Morison’s equation and related hydrodynamic models, were implemented to compute the fluid–structure interactions. These allow examination of the manipulators’ influence on both the vehicle and each other when operating simultaneously .

<style>
.same-height-imgs img,
.same-height-imgs figure img {
  height: 300px !important;
  width: auto !important;
  object-fit: contain !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<div class="row mt-3 same-height-imgs">
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/UVMS1.png" title="Image 1" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      3D model of the UVMS
    </div>
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/UVMS-dualarm.png" title="Image 2" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      3D model of the underwater manipulator
    </div>
  </div>
</div>

---

## Kinematics analysis and numerical simulation

#### Overview
Following the hydrodynamic analysis in Part I, this study develops and validates a kinematic and simulation framework for two 4-DOF manipulators mounted on an AUV. The project ensures coordinated and precise motion for underwater dual-arm robotic operations.

#### Key Contributions
- **Mechanical Reconstruction & Modeling:**
The dual-manipulator system is detailed using CAD (SolidWorks), capturing the geometric structure and joint configurations for each 4-DOF arm with claw end-effectors 

- **Forward & Inverse Kinematics:**
Derivation and implementation of both forward and inverse kinematic models allow calculation of the end-effector poses given joint angles, and vice versa. The models account for link lengths, joint limits, and workspace reach.

- **Jacobian & Motion Dynamics:**
Analytical Jacobian matrices are computed to relate joint velocities to end-effector velocities. These formulations are crucial for real-time control and coordination between two manipulators (when working together in shared workspace).

- **Numerical Simulation & Workspace Analysis:**
Kinematic equations are validated through simulation, exploring joint trajectories, reachable workspace, and manipulation paths. Performance under synchronized dual-arm motion is assessed to ensure smooth and collision-free operation .

#### Impact
This work delivers a foundational framework for dual-arm underwater robotic manipulation, enabling precise control via well-defined kinematic models and synchronized dual-arm coordination. This study bridges the gap between physical hardware design and functional motion capability—vital for underwater tasks such as object grasping, assembly, or inspection in challenging marine environments.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/UVMS-sim.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="600px" zoomable=true%}
  </div>
</div>
<div class="caption">
  Motion process of the dual manipulator
</div>

