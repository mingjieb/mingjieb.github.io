---
layout: page
title: MAMS
description: Software Defined Control for Smart Manufacturing Systems
img: assets/img/MAMS.gif
importance: 3
category: Industrial Application
related_publications: true
---

# MAMS: Software Defined Control for Smart Manufacturing Systems

---

## Dynamic Distributed Decision-Making for Resilient Resource Reallocation

**Overview:**  
This project develops a dynamic and distributed agent-based decision-making framework to support real-time resource reallocation in manufacturing systems facing unexpected disruptions. The system promotes local autonomy and cooperation while maintaining global efficiency and resilience. {% cite huang2024adasociety%}

<!-- {% cite bi2021dynamic %}

{% cite bi2024dynamic %} -->

**Agent Modeling:**  
Manufacturing units, such as workshops and machines, are modeled as autonomous agents equipped with knowledge of their functional capabilities, local production states, and inter-agent dependencies. Each agent incorporates a hybrid decision structure that includes both rule-based disruption identification and optimization-based decision execution.

**Agent Interaction:**  
Agents collaborate through a multi-phase communication protocol designed to resolve resource reallocation dynamically. This includes broadcast-based disruption detection, negotiation-based reallocation coordination, and feedback-driven adjustment cycles. The interaction design emphasizes local transparency and efficient conflict resolution.

**Agent Decision-Making:**  
Upon detecting a disruption, affected agents initiate a decentralized coordination process that includes evaluating feasible resource transfer plans, selecting optimal production partners, and dynamically adjusting production tasks. Decision-making integrates real-time information, cost models, and workload balancing, enabling agents to adapt under time constraints.

**Experiment Design:**  
A simulated job-shop manufacturing scenario is constructed, with agents representing different types of production resources. The framework is evaluated under various disruption cases (e.g., machine failures, transport breakdowns), and compared to centralized and semi-centralized baselines. Metrics include reallocation feasibility, decision latency, task completion rate, and overall system resilience.

**Impact:**  
This work demonstrates the potential of dynamic distributed intelligence in improving the robustness and responsiveness of smart manufacturing systems. It provides a scalable blueprint for handling disruptions through autonomous agents and offers practical implications for industrial resilience strategies.

---

## Automated Learning Control Architecture for Cyber-Physical Manufacturing Systems

**Overview:**  
This project explores a hierarchical control architecture that integrates machine learning with model-based control for next-generation cyber-physical manufacturing systems. The proposed framework enables intelligent automation that adapts to complex, dynamic, and uncertain environments, aiming to improve manufacturing system flexibility, robustness, and performance.


<!-- {% cite kovalenko2022towards %} -->

**Key Contributions:**

- **Learning-Integrated Control Architecture:**  
  The project introduces a layered architecture combining reactive control, learning-based optimization, and system-level orchestration. The lower level deals with real-time execution, the middle layer supports adaptation via learning and optimization (e.g., reinforcement learning), and the top layer handles strategic decisions across tasks and reconfiguration.

- **Digital Twin and Model Predictive Control Integration:**  
  The system leverages digital twins and data-driven models to capture physical system behaviors and guide adaptive decision-making. Model predictive control is enhanced through learning components that dynamically improve control strategies over time.

- **Closed-Loop Intelligence:**  
  Emphasis is placed on learning from feedback to handle disturbances, uncertainties, and changing goals. The system automatically tunes itself based on online and offline data, enabling long-term improvement in decision-making and control.

**Application Scenarios:**  
The architecture is validated through several manufacturing use cases, such as machine tool path control, process reconfiguration, and dynamic task allocation. These cases demonstrate the architecture’s ability to integrate sensing, learning, and actuation in real-world production environments.

**Impact:**  
This work lays the foundation for scalable and adaptive control in smart factories. By combining machine learning, feedback control, and cyber-physical integration, it advances the vision of autonomous manufacturing systems capable of continual self-optimization and reconfiguration.

---

<!-- {% cite fu2025digital %} -->

## Gallery

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="Example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="Example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="Example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="Example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  This image can also have a caption. It's like magic.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="Example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="Example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

---

You can also put regular text between your rows of images. For example, citations {% cite bi2024dynamic %}.

Say you wanted to write a little bit about your project before you posted the rest of the images.  
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

---

<small>
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
</small>