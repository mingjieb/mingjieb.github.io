---
layout: page
title: Manufacuring Line Reconfiguration
description: (Hitachi) A digital twin- and optimization-based dynamic line reconfiguration method
img: assets/img/hitachi-line.png
importance: 3
category: Industrial Application
related_publications: true
---

This project was collaborated with my previous collegues Dr. [Bo Fu](https://www.bofu.page/), supervised by Prof. Kira Barton and Prof. Dawn M. Tilbury, when I studied at the University of Michigan. It was funded by Hitachi America Ltd. One paper was published in this project: {% cite fu2025digital %}, which will be presented in CASE 2025.

---

## Digital Twin-based Smart Manufacturing: Dynamic Line Reconfiguration for Disturbance Handling


<div class="row align-items-center my-4">
  <div class="col-md-6">
    <strong style="font-size: 1.3em;">Overview:</strong>
    <ul>
    This project proposes a unified framework that enables automatic and dynamic reconfiguration of manufacturing lines in response to real-world disturbances, such as machine failures or operator delays. The approach tightly integrates digital twins, ontology-based capability modeling, combinatorial optimization, and discrete-event simulation, offering a scalable and real-time solution for smart and resilient manufacturing.
    </ul>
    <strong style="font-size: 1.3em;">Key features:</strong>
    <ul>
    <li><strong>Digital Twin Integration:</strong>
      A real-time digital twin continuously monitors the production line’s operational state, detects disruptions, and triggers the reconfiguration pipeline.
    </li>
    <li><strong>Ontology-based capability modeling:</strong>
      Each machine and worker is modeled based on capabilities using ontology models, allowing for flexible reassignment and routing under new configurations.
    </li>
    <li><strong>Automated Optimization:</strong>
      When a disturbance is detected, an optimization module generates feasible reconfiguration plans that satisfy physical, temporal, and capability constraints.
    </li>
    <li><strong>Fast Simulation Validation:</strong>
      Each candidate configuration is validated using a high-speed discrete-event simulator (~400x real-time) to ensure effectiveness before deployment.
    </li>
    <li><strong>Full Automation:</strong>
      The entire pipeline—from disturbance detection to optimized configuration selection and deployment—is fully automated, requiring no manual intervention.
    </li>
    </ul>
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/hitachi-arch.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      An illustration of the system process digital twin and its connection with the real manufacturing line
    </div>
  </div>
</div>


<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/TASE-hitachi.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="600px" zoomable=true %}
  </div>
</div>
<div class="caption">
  An example manufacturing line operating under a disturbance due to a slower worker
</div>



### Experimental Validation
To demonstrate the efficacy of the framework, a battery manufacturing line-based case study with 51 operations and 8 agent types has been conducted. The framework initializes a line configuration to achieve the optimal bottleneck time of 43.9 s using 20 agents. Then, we introduce two disturbances to the manufacturing line. Under the smaller disturbance, the reconfiguration framework is able to maintain the 43.9 s bottleneck time by redistributing operations from the disturbed agent to an adjacent agent with similar capabilities. Under larger disturbances, the framework chooses to add one more agent to the manufacturing line in addition to redistributing the operations to neighboring agents. Using these two strategies, the framework is able to determine a reconfiguration plan that maintains the original bottleneck time and throughput value. Compared to the use of the original line configuration plan under these two disturbances, the implementation of a reconfiguration plan prevents the 26% and 63% drops in the throughput, respectively. In addition, the framework has been shown to be computationally efficient. The configuration optimization and reconfiguration take 0.8 s and 0.03 s on average to find an optimal solution. The simulation runs at around 400x real-time speed.

### Impact
This work bridges the gap between digital twin technologies and operational decision-making in manufacturing. It provides a robust foundation for adaptive, automated, and resilient production systems in the era of Industry 4.0.
<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/hitachi-line.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="600px" zoomable=true%}
  </div>
</div>
<div class="caption">
  A battery manufacturing line
</div>