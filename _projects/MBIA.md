---
layout: page
title: Multi-Agent Supply Chain Networks
description: (NSF) A Model-Based Intelligent Agent Approach for Supply Chain Transparency and Resilience
img: assets/img/MBIA.gif
importance: 2
category: Industrial Application
related_publications: true
---

This project was collaborated with my previoud collegues Gongyu Chen and Juan-Alberto Estrada-Garcia, supervised by Prof. Kira Barton, Prof. Dawn M. Tilbury and Prof. Siqian Shen, when I studied at the University of Michigan. It was founded by NSF. Five papers were published in this project: {% cite bi2023distributed bi2022model bi2024heterogeneous estrada2023multi estrada2025lead %}, where two of them were awarded as **Best Conference Paper Finalist** in CASE.

---
## A distributed approach for agile supply chain decision-making based on network attributes

#### Overview
This project proposes a distributed multi-agent framework to support agile decision-making in disrupted supply chains. By leveraging local agent intelligence, network structure awareness, and dynamic communication protocols, the framework enables fast and effective responses to supplier loss and other disruptions, without requiring full network re-optimization.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/CASE-Bi.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="800px" zoomable=true%}
  </div>
</div>
<div class="caption">
  The proposed multi-agent framework for supply chain disruption mitigation
</div>

<div class="row align-items-center my-4">
  <div class="col-md-6">
    <span style="font-size: 1.5em;">Agent Modeling:</span><br>
    Each agent in the supply chain (suppliers, manufacturers, transporters, etc.) is modeled with a belief-desire-intention (BDI) architecture. Agents possess knowledge of their own capabilities, production states, and surrounding network context. This model-based design enables flexible behavior adaptation in the face of disruption. 
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MBIA-model.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      The proposed supply chain agent architecture
    </div>
  </div>
</div>


<div class="row align-items-center my-4">
  <div class="col-md-6">
    <span style="font-size: 1.5em;">Agent Interaction:</span><br>
    Agents interact through structured communication protocols inspired by the Contract Net Protocol. Communication involves iterative information exchange for supplier selection, flow reallocation, and demand propagation. This design supports local collaboration and global coordination without centralized control.
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/TASE-MBIA.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      The flow chart of the proposed agent communication and decisionmaking process
    </div>
  </div>
</div>

<div class="row align-items-center my-4">
  <div class="col-md-6">
    <span style="font-size: 1.5em;">Agent Decision-Making:</span><br>
    Each agent independently identifies disruptions, updates its local state, and solves constrained optimization problems to fulfill new product demands. Decision-making processes include disruption detection, supplier selection, and response planning, and are guided by agent-level objectives such as cost minimization or capacity balancing. 
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/RAL.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      Risk management mechanism with heterogeneous risk focuses and risk attitudes for the roles of supplier agents and demand agents
    </div>
  </div>
</div>


#### Experiment Design
We conduct a comprehensive case study on a vehicle cockpit supply chain with 117 enterprise agents and 413 transport agents. 84 disruption scenarios are simulated, and the distributed approach is compared to a centralized optimization baseline. Performance is evaluated across multiple metrics including overage cost, network changes, communication effort, and feasibility under varying agent attributes (connectivity, complexity, redundancy, depth).

<style>
.same-height-imgs img,
.same-height-imgs figure img {
  height: 180px !important;
  width: auto !important;
  object-fit: contain !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<div class="row mt-3 same-height-imgs">
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/TASE-Juan.png" title="Image 1" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      Agent-based decision optimization and simulation
    </div>
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MBIA-product.png" title="Image 2" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      The simplified product structure for automotive cockpit
    </div>
  </div>
</div>


#### Impact
This project offers a practical and scalable approach for supply chain disruption management. It highlights the importance of network-aware agent attributes in decision-making performance and provides actionable insights for when to deploy centralized vs. distributed strategies based on disruption type and agent characteristics.
