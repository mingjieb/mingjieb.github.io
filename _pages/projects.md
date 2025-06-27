---
layout: page
title: Projects
permalink: /projects/
description: 
nav: true
nav_order: 2
display_categories: [Social Simulation, Industrial Application, Robotics, Others]
horizontal: false
---



<div style="display: flex; align-items: flex-start; gap: 2em; margin-bottom: 2em;">
  <!-- Project Picture -->
  <div>
    <img src="/assets/img/projects_overview.jpg" alt="Projects Overview" style="max-width:220px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.08);" />
  </div>
  <!-- Category Blocks -->
  <div style="display: flex; flex-direction: column; gap: 1em;">
    {% for category in page.display_categories %}
      <a href="#{{ category | slugify }}" style="text-decoration: none;">
        <div style="
          background: var(--global-theme-color);
          color: var(--global-hover-text-color);
          padding: 1em 2em;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1.1em;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: background 0.2s;
        " onmouseover="this.style.background='var(--global-hover-color)'" onmouseout="this.style.background='var(--global-theme-color)'">
          {{ category | capitalize }}
        </div>
      </a>
    {% endfor %}
  </div>
</div>


<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
