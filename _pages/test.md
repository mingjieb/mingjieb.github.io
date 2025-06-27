---
layout: page
title: test
permalink: /test/
description: 
nav: false
nav_order: 
---

<div class="diagram-projects-fixed" style="position:relative; width:100%; max-width:900px; height:700px; margin:0 auto;">

  <!-- SVG Connectors -->
  <svg class="diagram-connectors-fixed" width="100%" height="650" style="position:absolute; left:0; top:0; z-index:1;">
    <!-- Top connections -->
    <line x1="16.6%" y1="140" x2="50%" y2="230" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="50%" y1="140" x2="50%" y2="230" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="83.3%" y1="140" x2="50%" y2="230" stroke="var(--global-theme-color)" stroke-width="2"/>
    <!-- Bottom connections -->
    <line x1="16.6%" y1="320" x2="50%" y2="250" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="50%" y1="320" x2="50%" y2="250" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="83.3%" y1="320" x2="50%" y2="250" stroke="var(--global-theme-color)" stroke-width="2"/>
  </svg>

  <!-- Top Sub Blocks (no projects) -->
  <div class="sub-blocks-row" style="position:absolute; top:100px; left:0; width:100%;">
    <div class="diagram-block sub-block-fixed">Modeling</div>
    <div class="diagram-block sub-block-fixed">Interactions</div>
    <div class="diagram-block sub-block-fixed">Decision-Making</div>
  </div>

  <!-- Center Block -->
  <div class="diagram-block center-block-fixed" style="position:absolute; left:50%; top:170px; transform:translateX(-50%);">Multi-Agent Systems</div>

  <!-- Bottom Sub Blocks with Projects -->
  <div class="sub-blocks-row" style="position:absolute; top:320px; left:0; width:100%;">
    <div>
      <div class="diagram-block sub-block-fixed">Social Simulation</div>
      <div class="project-group-fixed">
        {% assign projects1 = site.projects | slice: 0, 2 %}
        {% for project in projects1 %}
          {% include projects.liquid project=project %}
        {% endfor %}
      </div>
    </div>
    <div>
      <div class="diagram-block sub-block-fixed">Industrial Application</div>
      <div class="project-group-fixed">
        {% assign projects2 = site.projects | slice: 2, 2 %}
        {% for project in projects2 %}
          {% include projects.liquid project=project %}
        {% endfor %}
      </div>
    </div>
    <div>
      <div class="diagram-block sub-block-fixed">Robotics</div>
      <div class="project-group-fixed">
        {% assign projects3 = site.projects | slice: 4, 2 %}
        {% for project in projects3 %}
          {% include projects.liquid project=project %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>