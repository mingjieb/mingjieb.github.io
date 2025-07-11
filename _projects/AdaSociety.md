---
layout: page
title: AdaSociety
description: (PKU) A customizable multi-agent environment featuring expanding state and action spaces, alongside explicit and alterable social structures
img: assets/img/AdaSociety.gif
importance: 1
category: Social Simulation
related_publications: true
---

This project was collaborated with my collegues in BIGAI. One paper was published in this project: {% cite huang2024adasociety%}.

---

## *AdaSociety*: An Adaptive Environment with Social Structures for Multi-Agent Decision-Making 

#### Overview
AdaSociety is a novel benchmark environment for evaluating multi-agent decision-making under dynamic social structures. It introduces a population of heterogeneous agents co-evolving in a procedurally generated city with needs, preferences, and resource constraints, enabling the study of complex social behaviors, institutional emergence, and adaptation.
<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/Ada-arch.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="800px" zoomable=true%}
  </div>
</div>
<div class="caption">
  An overview of AdaSociety, composed of physical component and social component
</div>

#### Agent Modeling
AdaSociety introduces heterogeneous agents with the following features:
- **Inventory and Capacity**: Each agent has an inventory with varying capacity for different resources, encoding skills and limitations (e.g., some cannot carry specific tools or perform synthesis tasks).
- **Preferences**: Agents have individualized preferences for resources, modeled by a reward function $R_i(\rho) = m_i^{\rho} · h_i(\rho) · r^{\rho}$, where the subjective reward depends on the agent’s inventory, preference weights, and objective resource value.
- **Partial Observability**: Each agent operates with limited visibility in a local grid window and only observes its own inventory and the full social network graph.
- **Social Cognition Potential**: Agents can perceive and manipulate social states (e.g., their own position in a multilayer social graph), enabling higher-level reasoning such as group formation and hierarchy emergence.

#### Agent Interaction
Agent interaction occurs across two parallel domains: physical and social.

**Physical Interaction**
- **Actions**: Move, pick/drop resources, synthesize new items on event grids, and communicate.
- **Environment**: A 2D symbolic grid with both natural and synthesized resources, whose visibility and accessibility depend on the agent’s state.

**Social Interaction**
- **Dynamic Social Graph**: Agents are part of an evolving multilayer directed graph (nodes = agents/organizations; edges = social links like reward/information sharing)
- **Social Actions**: Connect, disconnect, or negotiate with others (e.g., forming contracts or coalitions).
- **Connection Semantics**: Links encode social mechanisms like reward sharing, labor division, and information access. These can be predefined or emergent through agent negotiation.

- **Mini-game Scenarios**:
  - **Social Structure**: Agents adapt to externally changing group configurations.
  - **Contract**: Agents form groups under fixed semantics before acting.
  - **Negotiation**: Agents bargain over reward splits and form dynamic coalitions.

<style>
.same-height-imgs img,
.same-height-imgs figure img {
  height: 220px !important;
  width: auto !important;
  object-fit: contain !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<div class="row mt-3 same-height-imgs">
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/Ada-tree.png" title="Image 1" class="img-fluid rounded z-depth-1" zoomable=true %}
    <div class="caption">
      Illustration of a synthesis tree
    </div>
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/Ada-interaction.png" title="Image 2" class="img-fluid rounded z-depth-1" zoomable=true %}
    <div class="caption">
      Illustration of the mutual adaptation between agents and AdaSociety
    </div>
  </div>
</div>

#### Agent Decision-Making
AdaSociety formalizes decision-making through the Growing-MG (Markov Game) framework:

- **Non-Stationarity**: Both the environment (states/actions) and transition/reward functions evolve over time, triggered by agent behaviors.

- **Social-State-Dependent Policies**: The agent must account for both physical exploration and social state evolution to maximize long-term gains.

- **Multiple Objectives**: Agents aim to optimize:
  - Individual reward.
  - Group fairness (via Gini index).
  - Event completion rates (depth of synthesis tree explored).
  - Effective social positioning (measured by graph degree metrics).

- **Algorithm Compatibility**: We use several deep reinforcement learning algorithms as baselines, including PPO, RecurrentPPO, Rainbow, and MAPPO. We employ a CNN for encoding grid information and a GCN for encoding social state in all RL methods. The open-source library RLLib is used for RL training.
Additionally, we design a curriculum learning (CL) algorithm. It starts with shared rewards to enhance cooperation strategies, then gradually increases social state randomness for learning under different social structures, and finally allows agents to perform social actions to establish their own social state. RecPPO is used for RL training at each stage. 
We also present a LLM + rule-based controller (LLM-C) framework based on GPT-4 [1], which converts environmental information into prompts to query an LLM for high-level plans and then calls a rule-based controller to execute actions based on the generated plan. LLM has been shown to be effective in some singleagent environments, such as MineCraft.

#### Experiment Design
To provide a comprehensive benchmark and illustrate the characteristics of *AdaSociety*, we propose a set of mini-games. The three mini-games are arranged in ascending order of the complexity of decision-making. *Social structure*, prescribing agents’ partners and connection semantics, evaluates agents’ ability to adapt to the changeable social structure. *Contract* predefines connection semantics, where agents need to select partners while learning coordination with various co-players. In *Negotiation*, agents independently select partners, determine the reward distribution plan with their partners, and behave under the negotiated relationship. All of the three mini-games share the same physical component, which contains a part of the synthesis tree. To show the full complexity of our physical components, another mini-game *Exploration*, which contains all built-in resources and events, is conducted as well.

Through the test of several RL and LLM-based algorithms in mini-games, the preliminary results
indicate that AdaSociety maintains a rational complexity level for current decision-making methods.

<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/Ada-games.png" title="example image" class="img-fluid rounded z-depth-1" max-width="600px" zoomable=true%}
    </div>
</div>
<div class="caption">
    Overview of three mini-games: (a) Social Structure (b) Contract (c) Negotiation
</div>

#### Impact
AdaSociety fills a critical gap in existing benchmarks by integrating agent heterogeneity, social structure dynamics, and long-horizon adaptation. It serves as a testbed for advancing socially aware AI, multi-agent reinforcement learning, LLM agents, and computational social science.





