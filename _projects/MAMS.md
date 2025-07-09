---
layout: page
title: Multi-Agent Manufacutring Systems
description: (NSF) Software Defined Control for Smart Manufacturing Systems
img: assets/img/MAMS.gif
importance: 1
category: Industrial Application
related_publications: true
---


## Dynamic Distributed Decision-Making for Resilient Resource Reallocation

<div class="row align-items-center my-4">
<div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MAMS-arch.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      This image can also have a caption. It's like magic.
    </div>
  </div>
  <div class="col-md-6">
    <strong>Overview:</strong><br>
    This project develops a dynamic and distributed agent-based decision-making framework to support real-time resource reallocation in manufacturing systems facing unexpected disruptions. The system promotes local autonomy and cooperation while maintaining global efficiency and resilience.  cite {% cite bi2021dynamic %} cite {% cite bi2024dynamic %}
  </div>
</div>

**Agent Modeling:**  
Manufacturing units, such as workshops and machines, are modeled as autonomous agents equipped with knowledge of their functional capabilities, local production states, and inter-agent dependencies. Each agent incorporates a hybrid decision structure that includes both rule-based disruption identification and optimization-based decision execution.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MAMS-agent.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="700px" zoomable=true%}
  </div>
</div>
<div class="caption">
  This image can also have a caption. It's like magic.
</div>

<div class="row align-items-center my-4">
  <div class="col-md-6">
    <strong>Agent Interaction:</strong><br>
    Agents collaborate through a multi-phase communication protocol designed to resolve resource reallocation dynamically. This includes broadcast-based disruption detection, negotiation-based reallocation coordination, and feedback-driven adjustment cycles. The interaction design emphasizes local transparency and efficient conflict resolution.
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MAMS-com.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      This image can also have a caption. It's like magic.
    </div>
  </div>
</div>

**Agent Decision-Making:**  
Upon detecting a disruption, affected agents initiate a decentralized coordination process that includes evaluating feasible resource transfer plans, selecting optimal production partners, and dynamically adjusting production tasks. Decision-making integrates real-time information, cost models, and workload balancing, enabling agents to adapt under time constraints.

**Experiment Design:**  
A simulated job-shop manufacturing scenario is constructed, with agents representing different types of production resources. The framework is evaluated under various disruption cases (e.g., machine failures, transport breakdowns), and compared to centralized and semi-centralized baselines. Metrics include reallocation feasibility, decision latency, task completion rate, and overall system resilience.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/IJPR.gif" title="Example image" class="img-fluid rounded z-depth-1" max-width="600px" zoomable=true%}
  </div>
</div>
<div class="caption">
  This image can also have a caption. It's like magic.
</div>

**Impact:**  
This work demonstrates the potential of dynamic distributed intelligence in improving the robustness and responsiveness of smart manufacturing systems. It provides a scalable blueprint for handling disruptions through autonomous agents and offers practical implications for industrial resilience strategies.

---

## Automated Learning Control Architecture for Cyber-Physical Manufacturing Systems

**Overview:**  
This project explores a hierarchical control architecture that integrates machine learning with model-based control for next-generation cyber-physical manufacturing systems. The proposed framework enables intelligent automation that adapts to complex, dynamic, and uncertain environments, aiming to improve manufacturing system flexibility, robustness, and performance. cite {% cite kovalenko2022towards %}

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/IEEE-Access.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="700px" zoomable=true%}
  </div>
</div>
<div class="caption">
  This image can also have a caption. It's like magic.
</div>

**Key Contributions:**

- **Learning-Integrated Control Architecture:**  
  The project introduces a layered architecture combining reactive control, learning-based optimization, and system-level orchestration. The lower level deals with real-time execution, the middle layer supports adaptation via learning and optimization (e.g., reinforcement learning), and the top layer handles strategic decisions across tasks and reconfiguration.

- **Digital Twin and Model Predictive Control Integration:**  
  The system leverages digital twins and data-driven models to capture physical system behaviors and guide adaptive decision-making. Model predictive control is enhanced through learning components that dynamically improve control strategies over time.

- **Closed-Loop Intelligence:**  
  Emphasis is placed on learning from feedback to handle disturbances, uncertainties, and changing goals. The system automatically tunes itself based on online and offline data, enabling long-term improvement in decision-making and control.

**Application Scenarios:**  
The architecture is validated through several manufacturing use cases, such as machine tool path control, process reconfiguration, and dynamic task allocation. These cases demonstrate the architecture’s ability to integrate sensing, learning, and actuation in real-world production environments.
<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/Access-eg.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="700px"  zoomable=true%}
  </div>
</div>
<div class="caption">
  This image can also have a caption. It's like magic.
</div>

**Impact:**  
This work lays the foundation for scalable and adaptive control in smart factories. By combining machine learning, feedback control, and cyber-physical integration, it advances the vision of autonomous manufacturing systems capable of continual self-optimization and reconfiguration.

---
