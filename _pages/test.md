---
layout: page
title: test
permalink: /projects/
description: 
nav: true
nav_order: 6
---

<div class="diagram-projects">

  <!-- Central Block -->
  <div class="diagram-block center-block">
    <span>Main Project</span>
  </div>

  <!-- Sub Blocks -->
  <div class="diagram-subblocks">
    <div class="diagram-block sub-block" id="sub-block-1"><span>Sub Block 1</span></div>
    <div class="diagram-block sub-block" id="sub-block-2"><span>Sub Block 2</span></div>
    <div class="diagram-block sub-block" id="sub-block-3"><span>Sub Block 3</span></div>
  </div>

  <!-- Connectors -->
  <svg class="diagram-connectors" width="100%" height="120">
    <line x1="50%" y1="60" x2="25%" y2="110" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="50%" y1="60" x2="50%" y2="110" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="50%" y1="60" x2="75%" y2="110" stroke="var(--global-theme-color)" stroke-width="2"/>
  </svg>

  <!-- Projects under each sub block -->
  <div class="diagram-project-list">
    <div class="project-group" id="projects-1">
      {% assign projects1 = site.projects | slice: 0, 2 %}
      {% for project in projects1 %}
        {% include projects.liquid project=project %}
      {% endfor %}
    </div>
    <div class="project-group" id="projects-2">
      {% assign projects2 = site.projects | slice: 2, 2 %}
      {% for project in projects2 %}
        {% include projects.liquid project=project %}
      {% endfor %}
    </div>
    <div class="project-group" id="projects-3">
      {% assign projects3 = site.projects | slice: 4, 2 %}
      {% for project in projects3 %}
        {% include projects.liquid project=project %}
      {% endfor %}
    </div>
  </div>
</div>