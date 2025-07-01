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



<div style="display: flex; align-items: stretch; gap: 2em; margin-bottom: 2em;">
  <!-- Project Picture -->
  <div style="display: flex; align-items: stretch;">
    <img id="projects-overview-img"
     src="/assets/img/MAS-light.png"
     alt="Projects Overview"
     style="height: 100%; max-height: 260px; object-fit: cover;" />
  </div>
  <!-- Category Blocks -->
  <div style="display: flex; flex-direction: column; gap: 0.5em; justify-content: stretch; height: 260px;">
    {% for category in page.display_categories %}
      <a href="#{{ category | slugify }}" style="text-decoration: none; flex: 1;">
        <div style="
          background: var(--global-theme-color);
          color: var(--global-hover-text-color);
          padding: 1em 2em;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1em;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: background 0.2s;
          height: 25%; display: flex; align-items: center; justify-content: center;
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
  <h2 class="category" id="{{ category | slugify }}">{{ category }}</h2>
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


<script>
(function() {
  function setProjectImg() {
    var img = document.getElementById('projects-overview-img');
    if (!img) return;
    var theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      img.src = '/assets/img/MAS-dark.png';
    } else {
      img.src = '/assets/img/MAS-light.png';
    }
  }
  // Initial set
  setProjectImg();
  // Listen for theme changes (if your theme toggler sets data-theme on <html>)
  const observer = new MutationObserver(setProjectImg);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
})();
</script>