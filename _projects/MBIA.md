---
layout: page
title: Multi-Agent Supply Chain Networks
description: (NSF) A Model-Based Intelligent Agent Approach for Supply Chain Transparency and Resilience
img: assets/img/MBIA.gif
importance: 2
category: Industrial Application
related_publications: true
---

**Overview:**
This project proposes a distributed multi-agent framework to support agile decision-making in disrupted supply chains. By leveraging local agent intelligence, network structure awareness, and dynamic communication protocols, the framework enables fast and effective responses to supplier loss and other disruptions, without requiring full network re-optimization.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/CASE-Bi.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="800px" zoomable=true%}
  </div>
</div>
<div class="caption">
  This image can also have a caption. It's like magic.
</div>

<div class="row align-items-center my-4">
  <div class="col-md-6">
    <strong>Agent Modeling:</strong><br>
    Each agent in the supply chain (suppliers, manufacturers, transporters, etc.) is modeled with a belief-desire-intention (BDI) architecture. Agents possess knowledge of their own capabilities, production states, and surrounding network context. This model-based design enables flexible behavior adaptation in the face of disruption. 
    {% cite bi2023distributed bi2022model bi2024heterogeneous %}
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MBIA-model.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      This image can also have a caption. It's like magic.
    </div>
  </div>
</div>


<div class="row align-items-center my-4">
  <div class="col-md-6">
    <strong>Agent Interaction:</strong><br>
    Agents interact through structured communication protocols inspired by the Contract Net Protocol. Communication involves iterative information exchange for supplier selection, flow reallocation, and demand propagation. This design supports local collaboration and global coordination without centralized control.
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/TASE-MBIA.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      This image can also have a caption. It's like magic.
    </div>
  </div>
</div>

<div class="row align-items-center my-4">
  <div class="col-md-6">
    <strong>Agent Decision-Making:</strong><br>
    Each agent independently identifies disruptions, updates its local state, and solves constrained optimization problems to fulfill new product demands. Decision-making processes include disruption detection, supplier selection, and response planning, and are guided by agent-level objectives such as cost minimization or capacity balancing. cite{% cite estrada2023multi%} cite {% cite estrada2025lead%}
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/RAL.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      This image can also have a caption. It's like magic.
    </div>
  </div>
</div>


**Experiment Design:**
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
      Caption for image 1.
    </div>
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MBIA-product.png" title="Image 2" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      Caption for image 2.
    </div>
  </div>
</div>


**Impact:**
This project offers a practical and scalable approach for supply chain disruption management. It highlights the importance of network-aware agent attributes in decision-making performance and provides actionable insights for when to deploy centralized vs. distributed strategies based on disruption type and agent characteristics.


