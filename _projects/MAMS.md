---
layout: page
title: Multi-Agent Manufacutring Systems
description: (NSF) Software Defined Control for Smart Manufacturing Systems
img: assets/img/MAMS.gif
importance: 1
category: Industrial Application
related_publications: true
---

This project was collaborated with my previoud collegues Prof. Ilya Kovalenko, supervised by Prof. Kira Barton and Prof. Dawn M. Tilbury, when I studied at the University of Michigan. It was founded by NSF. Three papers were published in this project: {% cite bi2021dynamic bi2024dynamic kovalenko2022towards %}.

---

## Dynamic Distributed Decision-Making for Resilient Resource Reallocation

<div class="row align-items-center my-4">
<div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MAMS-arch.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      An example of multi-agent manufacturing system
    </div>
  </div>
  <div class="col-md-6">
    <span style="font-size: 1.5em;">Overview</span><br>
    This project develops a dynamic, distributed, and resilient decision-making framework for manufacturing systems facing disruptions such as machine failures or unplanned downtime. The core innovation lies in modeling production resources as autonomous agents capable of local reasoning, communication, and task negotiation. By embedding agents with decision model that relies solely on local information and neighbor interactions, the system avoids reliance on a central controller and ensures robustness against partial failures. We propose a distributed protocol—information exchange and cooperative reallocation—validated through extensive simulations across various network topologies and disruption scales. The results demonstrate superior performance in maintaining production continuity and system efficiency, compared to static or centralized alternatives.
  </div>
</div>

#### Agent Modeling
The paper models agents as autonomous production units by leveraging the following theoretical foundations:

- **Belief-Desire-Intention (BDI)**: Following Theory of Mind (ToM), the agent architecture applying BDI design to model agent knowledge base, storing and tracking agent local information, such as production schedule, current state, capabilities, environment, etc.
- **Finite State Machines (FSMs)**: Agents' states and capabilities are modeled as automata with well-defined operational states (idle, processing, disrupted, etc.) and operational capabilities (move part, drilling a hole, etc.), enabling structured transitions and modular analysis of behavior under dynamic conditions.
- **Category Theory**: Various sets and mapping functions are used to define agents' knowledge of their environments, including production schedule neighbors, same-capabilities machines, collaboration-possible agents, etc.
- **Mix Integer Programming (MIP)**: The decision process of agents is modeled as an MIP optimization problem, similar to common scheduling and planning problem in operations research. 

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MAMS-agent.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="700px" zoomable=true%}
  </div>
</div>
<div class="caption">
  The internal resource agent architecture, including Knowledge Base, Communication Manager, and Decision Manager
</div>

<div class="row align-items-center my-4">
  <div class="col-md-6">
    <span style="font-size: 1.5em;">Agent Interaction</span><br>
    Agent interactions are governed by lightweight, negotiation-based distributed protocols, drawing on several key methodologies:
    <ul>
      <li><strong>Contract Net Protocol (CNP):</strong>
      The task redistribution mechanism mimics the CNP model: agents suffered from disruption sends requests to other agents based on its capability-based environment model. These agents determines request response, including help or propagation needed. All communication only allows local information to share.
      </li>
      <li><strong>Graph-Based Communication Topology:</strong>
      Agents communicate with neighbors in a static or dynamic network topology (e.g., line, ring, grid), aligning with concepts in multi-agent system (MAS) graph theory, which influences convergence and propagation speed.
      </li>
      <li><strong>Consensus-Based Local Protocols:</strong>
      The two-stage interaction (information sharing → task negotiation) is designed to reach local consensus, borrowing from distributed consensus models used in fault-tolerant computing and decentralized control.
      </li>
    </ul>
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/MAMS-com.png" title="Example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    <div class="caption">
      Coordination behaviors of resource agents for rescheduling process
    </div>
  </div>
</div>

#### Agent Decision-Making
The decision-making logic is grounded in distributed optimization and resilience engineering, supported by:
- **MIP Optimization**: The system avoids solving full MIP centrally but mirrors it by decomposing the task allocation problem into local subproblems. Each agent performs a simplified binary decision process, approximating a distributed MIP approach.
- **Risk Assessment**: Agents handle disruptions (e.g., machine failures) reactively, while they also consider probabilistic risk modeling into their optimization-based decision-making model, realizing reallocation to mitigate operational risks locally.
- **Local Decision-Making**: All decisions are made using only local and neighbor information. Agents trigger decisions based on events like load imbalance or failure, ensuring fast, scalable, and communication-efficient coordination.


#### Experiment Design
We use a Repast Symphony (RepastS) platform to model a multi-agent system and simulate the behavior of the agents due to its flexibility and scalability properties. The simulated manufacturing system represents a modified version of the Intel Mini-Fab, a semiconductor manufacturing facility. The simulated system contains two infinite-sized buffers, Entry and Exit, and 20 machines that are connected via a network of 6 mobile robots.

In this simulated manufacturing system, 50 L-products and 50 S-products are fed alternatively into the system with a pre-generated initial production schedule. Products enter the facility every 30 ticks starting at tick 10. Uncertainty in machine operation time and the probability of machine breakdown are added to all machines in the simulated system. The system starts operations with the probability of machine breakdown ranging from 3.3% to 10%. If a machine undergoes a breakdown, a rescheduling process will be triggered. 

The centralized method re-optimizes the whole system to generate a new schedule with a shorter cycle time than the distributed method. However, the centralized method requires more communication and larger computational efforts to reschedule the system. In practice, more communication potentially leads to a larger information delay, thus the centralized method lacks the ability to respond to disruptions dynamically and quickly. Furthermore, the computational efforts of the centralized method increase as the size and complexity of the set-up increase in scale. In this case, the distributed method can provide advantages by using local communication to reduce the communication and computation time

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/IJPR.gif" title="Example image" class="img-fluid rounded z-depth-1" max-width="600px" zoomable=true%}
  </div>
</div>
<div class="caption">
  Simulation of the facility from the RepastS environment
</div>

#### Impact 
The proposed framework significantly advances the resilience and autonomy of smart manufacturing systems under the Industry 4.0 paradigm. Its agent-based, distributed architecture offers a scalable and fault-tolerant alternative to traditional centralized control, which is often vulnerable to single points of failure and communication bottlenecks. By integrating lightweight, negotiation-based protocols inspired by contract net theory and distributed optimization, the system achieves both local responsiveness and global coordination. The ability to dynamically reallocate tasks in real-time makes this approach particularly valuable for high-mix, low-volume production environments and cyber-physical manufacturing platforms. Furthermore, the generality of the framework suggests broad applicability to other domains, such as logistics, cloud robotics, and distributed computing.

---

## Automated Learning Control Architecture for Cyber-Physical Manufacturing Systems

#### Overview
This project explores a hierarchical control architecture that integrates machine learning with model-based control for next-generation cyber-physical manufacturing systems. The proposed framework enables intelligent automation that adapts to complex, dynamic, and uncertain environments, aiming to improve manufacturing system flexibility, robustness, and performance. 

<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/IEEE-Access.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="700px" zoomable=true%}
  </div>
</div>
<div class="caption">
  A simple, two-level heirarchical example of a manufacturing control architecture that consists of multiple agents, including a central controller agent
</div>

#### Key Contributions

- **Learning-Integrated Control Architecture:**  
  The project introduces a layered architecture combining reactive control, learning-based optimization, and system-level orchestration. The lower level deals with real-time execution, the middle layer supports adaptation via learning and optimization (e.g., reinforcement learning), and the top layer handles strategic decisions across tasks and reconfiguration.

- **Digital Twin and Model Predictive Control Integration:**  
  The system leverages digital twins and data-driven models to capture physical system behaviors and guide adaptive decision-making. Model predictive control is enhanced through learning components that dynamically improve control strategies over time.

- **Closed-Loop Intelligence:**  
  Emphasis is placed on learning from feedback to handle disturbances, uncertainties, and changing goals. The system automatically tunes itself based on online and offline data, enabling long-term improvement in decision-making and control.

#### Application Scenarios
The architecture is validated through several manufacturing use cases, such as machine tool path control, process reconfiguration, and dynamic task allocation. These cases demonstrate the architecture’s ability to integrate sensing, learning, and actuation in real-world production environments.
<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/Access-eg.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="700px"  zoomable=true%}
  </div>
</div>
<div class="caption">
  The setting of the AM Fleet scenario. The arrows between the agents show the communication links while the arrows on the AM Fleet show the physical connections for material flow in the system
</div>

#### Impact
This work lays the foundation for scalable and adaptive control in smart factories. By combining machine learning, feedback control, and cyber-physical integration, it advances the vision of autonomous manufacturing systems capable of continual self-optimization and reconfiguration.

---
