---
layout: page
title: AdaSociety
description: (PKU) A customizable multi-agent environment featuring expanding state and action spaces, alongside explicit and alterable social structures
img: assets/img/AdaSociety.gif
importance: 1
category: Social Simulation
related_publications: true
---

Project: AdaSociety — Adaptive Multi-Agent Environment with Social Structures {% cite huang2024adasociety%}
**Overview:**
AdaSociety is a novel benchmark environment for evaluating multi-agent decision-making under dynamic social structures. It introduces a population of heterogeneous agents co-evolving in a procedurally generated city with needs, preferences, and resource constraints, enabling the study of complex social behaviors, institutional emergence, and adaptation.
<div class="row">
  <div class="col-sm mt-3 mt-md-0 text-center">
    {% include figure.liquid loading="eager" path="assets/img/Ada-arch.png" title="Example image" class="img-fluid rounded z-depth-1" max-width="800px" zoomable=true%}
  </div>
</div>
<div class="caption">
  This image can also have a caption. It's like magic.
</div>

**Agent Modeling:**
Agents are designed with diverse attributes, including consumption needs, labor abilities, and social identities. They possess internal states (e.g., health, inventory, utility) and interact within an environment that includes economic roles (e.g., consumer, worker, robber) and institutions (e.g., tax, punishment). This rich agent modeling supports the emergence of realistic macro-social dynamics from micro-level behaviors.

**Agent Interaction:**
Agents interact through structured mechanisms such as resource trading, labor matching, and public goods contribution. Social interactions also include cooperative and adversarial dynamics, including robbery and group-based identity formation. These interactions are affected by evolving institutions and group affiliations, allowing the simulation of adaptive social structures.

**Agent Decision-Making:**
Each agent operates based on local observations, balancing individual needs with social strategies. Decision-making spans basic survival (e.g., acquiring food) to complex political or institutional behaviors (e.g., voting, rule enforcement). Reinforcement learning is used to train policies that adapt to changing social and economic conditions.

**Experiment Design:**
The environment supports a wide range of experiments across over 30 tasks, including institutional evaluation, inter-group conflict, and long-term planning. Comprehensive metrics are introduced to assess social inequality, resource allocation efficiency, cooperation, and emergent group dynamics. The framework allows benchmarking multi-agent RL algorithms in adaptive and socially grounded settings.

**Impact:**
AdaSociety fills a critical gap in existing benchmarks by integrating agent heterogeneity, institutional dynamics, and long-horizon adaptation. It serves as a testbed for advancing socially aware AI, multi-agent reinforcement learning, and computational social science.


<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/Ada-games.png" title="example image" class="img-fluid rounded z-depth-1" max-width="600px" zoomable=true%}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>


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
      Caption for image 1.
    </div>
  </div>
  <div class="col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/Ada-interaction.png" title="Image 2" class="img-fluid rounded z-depth-1" zoomable=true %}
    <div class="caption">
      Caption for image 2.
    </div>
  </div>
</div>

