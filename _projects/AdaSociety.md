---
layout: page
title: AdaSociety
description: (PKU) A customizable multi-agent environment featuring expanding state and action spaces, alongside explicit and alterable social structures
img: assets/img/AdaSociety.gif
importance: 1
category: Social Simulation
related_publications: true
---

Project: AdaSociety — Adaptive Multi-Agent Environment with Social Structures
**Overview:**
AdaSociety is a novel benchmark environment for evaluating multi-agent decision-making under dynamic social structures. It introduces a population of heterogeneous agents co-evolving in a procedurally generated city with needs, preferences, and resource constraints, enabling the study of complex social behaviors, institutional emergence, and adaptation.
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/AdaSociety.png" title="Example image" class="img-fluid rounded z-depth-1" %}
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
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Ada-games.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Ada-tree.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Ada-interaction.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite huang2024adasociety%}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
