---
layout: page
title: Multi-Agent Supply Chain Networks
description: (NSF) A Model-Based Intelligent Agent Approach for Supply Chain Transparency and Resilience
img: assets/img/MBIA.gif
importance: 2
category: Industrial Application
related_publications: true
---

This project was collaborated with my previoud collegues Gongyu Chen and [Juan-Alberto Estrada-Garcia](https://websites.umich.edu/~juanest/), supervised by Prof. [Kira Barton](https://robotics.umich.edu/people/faculty/kira-barton/), Prof. [Dawn M. Tilbury](https://robotics.umich.edu/people/faculty/dawn-tilbury/) and Prof. [Siqian Shen](https://public.websites.umich.edu/~siqian/), when I studied at the University of Michigan. It was founded by NSF. Five papers were published in this project: {% cite bi2023distributed bi2022model bi2024heterogeneous estrada2023multi estrada2025lead %}, where two of them were awarded as **Best Conference Paper Finalist** in CASE.

---
## A distributed approach for agile supply chain decision-making based on network attributes

#### Overview
This project proposes a generalized distributed multi-agent framework to support agile decision-making in supply chains disrupted by unexpected events. It models supply chains as intelligent networks and introduces agent-based disruption mitigation strategies that emphasize local autonomy, communication efficiency, and modularity. The framework incorporates a formal agent architecture and validates its effectiveness through a realistic automotive supply chain case study. The results compare the proposed approach against a centralized optimization strategy under various disruption scenarios.

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
    Each agent has a BDI-based internal structure comprising:
    <ul>
      <li><strong>Beliefs:</strong>
      Knowledge about itself and environment (e.g., flow, capability, neighbors). The state model follows network flow dynamic equation, and other models utilize Category Theory to provide sets and mappings.
      </li>
      <li><strong>Desires:</strong>
      Local goals (e.g., minimizing cost). Agents are heterogeneous based on their roles in the supply chain networks, leading to dynamic chaning desires. 
      </li>
      <li><strong>Intentions:</strong>
      Committed production/transportation plans.
      </li>
    </ul>
    In addition, we described each agent with the following attributes: Connectivity, Depth, Redundancy, and Complexity.
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
    Agents interact through structured communication protocols inspired by the Contract Net Protocol (CNP). 
    Agent with the disruption firstly identify its replanning need and send requet to other agents in its environment model. Then agents receiving the request determine the response of the request and possibly propagate the request. Therefore, the communication involves iterative information exchange for supplier selection, flow reallocation, and demand propagation. All the communication targets are decided through the well-designed agent model, untill the whole system find a soluction for the disruption. This design supports local collaboration and global coordination without centralized control.
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
    The optimiztion models of agents in distributed mode and the models of the centralized model are initially designed by IOE collegues, then we iterated the model together by revising constraints, adding uncertainties, and incorprating lead time.
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/RAL.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      Risk management mechanism with heterogeneous risk focuses and risk attitudes for the roles of supplier agents and demand agents
    </div>
  </div>
</div>


#### Experiment Design
We firstly designed a vehicle cockpit supply chain, consisting of cockpit assembly plants, their customers (i.e., vehicle assembly plants), and their suppliers for components and materials, as the figure shows.
Then We conduct a comprehensive case study on a vehicle cockpit supply chain with 117 enterprise agents and 413 transport agents. 84 disruption scenarios are simulated, and the distributed approach is compared to a centralized optimization baseline. Performance is evaluated across multiple metrics including overage cost, network changes, communication effort, and feasibility under varying agent attributes (connectivity, complexity, redundancy, depth).
Through analyssis of the results, we concluded the following discoveries:
- High complexity leads to more network changes for both the centralized and distributed approaches, while high connectivity only impacts the distributed approach.
- High complexity leads to more network changes for both the centralized and distributed approaches, while high connectivity only impacts the distributed approach.
- High complexity leads to more network changes for both the centralized and distributed approaches, while high connectivity only impacts the distributed approach.
- High complexity leads to more network changes for both the centralized and distributed approaches, while high connectivity only impacts the distributed approach.

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
The study demonstrates that agent-level attributes (e.g., connectivity, complexity, redundancy) significantly influence the effectiveness of disruption responses. The distributed approach achieves 99% faster computation time, fewer network changes, and reduced communication compared to centralized models in most tested scenarios. The proposed framework offers a scalable and practical tool for supply chain resilience, enabling dynamic reconfiguration with limited global information. Moreover, the work provides valuable design insights for selecting appropriate decision-making strategies based on network and agent characteristics, and serves as a foundation for future extensions involving uncertainty and heterogeneous risk.
