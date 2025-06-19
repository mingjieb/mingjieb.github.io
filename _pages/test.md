---
layout: page
title: test
permalink: /test/
description: 
nav: true
nav_order: 6
---

<div class="diagram-projects-fixed">
  <!-- Central Block -->
  <div class="diagram-block center-block-fixed">Main Project</div>

  <!-- Sub Blocks -->
  <div class="diagram-block sub-block-fixed" style="left: 10%; top: 220px;">Sub Block 1</div>
  <div class="diagram-block sub-block-fixed" style="left: 40%; top: 220px;">Sub Block 2</div>
  <div class="diagram-block sub-block-fixed" style="left: 70%; top: 220px;">Sub Block 3</div>

  <!-- Connectors -->
  <svg class="diagram-connectors-fixed" width="100%" height="300">
    <line x1="50%" y1="100" x2="15%" y2="220" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="50%" y1="100" x2="45%" y2="220" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="50%" y1="100" x2="75%" y2="220" stroke="var(--global-theme-color)" stroke-width="2"/>
  </svg>

  <!-- Projects under each sub block -->
  <div class="project-group-fixed" style="left: 10%; top: 290px;">
    <div class="diagram-project-card">Project 1A</div>
    <div class="diagram-project-card">Project 1B</div>
  </div>
  <div class="project-group-fixed" style="left: 40%; top: 290px;">
    <div class="diagram-project-card">Project 2A</div>
    <div class="diagram-project-card">Project 2B</div>
  </div>
  <div class="project-group-fixed" style="left: 70%; top: 290px;">
    <div class="diagram-project-card">Project 3A</div>
    <div class="diagram-project-card">Project 3B</div>
  </div>
</div>