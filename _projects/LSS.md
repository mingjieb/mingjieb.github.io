---
layout: page
title: Large Social Simulator
description: (BIGAI) Human behavior simulation in real-world digital environment
img: assets/img/LSS.gif
importance: 1
category: Social Simulation
related_publications: true
---

This project was collaborated with my collegues in BIGAI.

---

#### Overview

The large social simulator is capable of modeling complex systems such as urban transportation, public resource allocation, and industrial supply chains. At the core of the simulator lies a value-driven framework that leverages large-scale trajectory data to learn individual and group-level preferences across space and time. This framework supports value learning from behavioral traces, enabling agents to form latent representations of motivations such as efficiency, safety, or convenience.

Built on top of this foundation is a value-driven spatiotemporal trajectory prediction module, which allows the simulator to generate realistic individual or collective movement patterns under different environmental or policy conditions. To enhance decision-making fidelity, the simulator integrates a dual-system architecture inspired by cognitive models: a fast, learned predictive system for routine behavior, and a slow, deliberative system that evaluates decisions based on value alignment and long-term outcomes. This design supports adaptive, interpretable, and scalable agent behaviors for simulating realistic societal dynamics.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/LSS.gif" title="Example image" class="img-fluid rounded z-depth-1" max-width="800px" zoomable=true%}
  </div>
</div>
<div class="caption">
  A demostration of simulated human behavior in large social simulator
</div>

#### Details to be released