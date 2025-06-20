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

  <!-- Connectors -->
  <svg class="diagram-connectors-fixed" width="100%" height="180">
    <line x1="50%" y1="80" x2="25%" y2="160" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="50%" y1="80" x2="50%" y2="160" stroke="var(--global-theme-color)" stroke-width="2"/>
    <line x1="50%" y1="80" x2="75%" y2="160" stroke="var(--global-theme-color)" stroke-width="2"/>
  </svg>

  <!-- Sub Blocks -->
  <div class="sub-blocks-row">
    <div class="diagram-block sub-block-fixed">Sub Block 1</div>
    <div class="diagram-block sub-block-fixed">Sub Block 2</div>
    <div class="diagram-block sub-block-fixed">Sub Block 3</div>
  </div>

  <!-- Projects under each sub block -->
  <div class="project-groups-row">
    <div class="project-group-fixed">
      <div class="diagram-project-card">Project 1A</div>
      <div class="diagram-project-card">Project 1B</div>
    </div>
    <div class="project-group-fixed">
      <div class="diagram-project-card">Project 2A</div>
      <div class="diagram-project-card">Project 2B</div>
    </div>
    <div class="project-group-fixed">
      <div class="diagram-project-card">Project 3A</div>
      <div class="diagram-project-card">Project 3B</div>
    </div>
  </div>
</div>