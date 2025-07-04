// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-presentations",
          title: "Presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/index.html";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-ieee-case-2024",
        
          title: "IEEE CASE 2024",
        
        description: "Heterogeneous Risk Management Using a Multi-Agent Framework for Supply Chain Disruption Response",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/presentations/2024/case2024/";
          
        },
      },{id: "post-asian-social-simulation-association-annual-conference",
        
          title: "Asian Social Simulation Association Annual Conference",
        
        description: "UV-Based Agent Modeling and Learning from Population Data Reconstruction",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/presentations/2024/ASSA/";
          
        },
      },{id: "post-job-talk",
        
          title: "Job Talk",
        
        description: "Distributed Decision-Making Using Multi-Agent Framework in Complex Systems",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/presentations/2023/jobtalk/";
          
        },
      },{id: "post-ph-d-defense",
        
          title: "Ph.D. Defense",
        
        description: "Ph.D. defense",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/presentations/2023/defense/";
          
        },
      },{id: "post-2023-midwest-workshop-on-control-and-game-theory",
        
          title: "2023 Midwest Workshop on Control and Game Theory",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/presentations/2023/mwcgt/";
          
        },
      },{id: "post-ieee-case-2022",
        
          title: "IEEE CASE 2022",
        
        description: "A model-based multi-agent framework to enable an agile response to supply chain disruptions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/presentations/2022/case2022/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-ra-l-paper-entitled-heterogeneous-risk-management-using-a-multi-agent-framework-for-supply-chain-disruption-response-was-presented-in-ieee-international-conference-on-automation-science-and-engineering-case-at-bari-italy",
          title: 'Our RA-L paper entitled Heterogeneous Risk Management Using a Multi-Agent Framework for Supply...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-adasociety-an-adaptive-environment-with-social-structures-for-multi-agent-decision-making-was-accepted-by-conference-and-workshop-on-neural-information-processing-systems-neurips-d-amp-amp-b-track",
          title: 'Our paper entitled AdaSociety: An Adaptive Environment with Social Structures for Multi-Agent Decision-Making...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-a-lead-time-aware-decomposition-approach-to-optimize-disruption-response-in-supply-chains-was-accepted-by-ieee-transactions-on-automation-science-and-engineering-t-ase",
          title: 'Our paper entitled A Lead-Time-Aware Decomposition Approach to Optimize Disruption Response in Supply...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-digital-twin-based-smart-manufacturing-dynamic-line-reconfiguration-for-disturbance-handling-was-accepted-by-ieee-transactions-on-automation-science-and-engineering-t-ase",
          title: 'Our paper entitled Digital Twin-based Smart Manufacturing: Dynamic Line Reconfiguration for Disturbance Handling...',
          description: "",
          section: "News",},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-adasociety",
          title: 'AdaSociety',
          description: "(PKU) A customizable multi-agent environment featuring expanding state and action spaces, alongside explicit and alterable social structures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AdaSociety/";
            },},{id: "projects-large-social-simulator",
          title: 'Large Social Simulator',
          description: "(BIGAI) Human behavior simulation in real-world digital environment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LSS/";
            },},{id: "projects-manufacuring-line-reconfiguration",
          title: 'Manufacuring Line Reconfiguration',
          description: "(Hitachi)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Line/";
            },},{id: "projects-multi-agent-manufacutring-systems",
          title: 'Multi-Agent Manufacutring Systems',
          description: "(NSF) Software Defined Control for Smart Manufacturing Systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MAMS/";
            },},{id: "projects-multi-agent-supply-chain-networks",
          title: 'Multi-Agent Supply Chain Networks',
          description: "(NSF) A Model-Based Intelligent Agent Approach for Supply Chain Transparency and Resilience",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MBIA/";
            },},{id: "projects-morality",
          title: 'Morality',
          description: "An LLM-based agent simulation framework modeling prehistoric hunter-gatherer societies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Morality/";
            },},{id: "projects-underwater-dual-manipulators",
          title: 'Underwater dual manipulators',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MultiShip/";
            },},{id: "projects-robot-kinematics-and-dynamics",
          title: 'Robot Kinematics and Dynamics',
          description: "Computational foundations of autonomous robotics for programming modern mobile manipulation systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ROB510/";
            },},{id: "projects-robotic-systems-laboratory",
          title: 'Robotic Systems Laboratory',
          description: "Multidisciplinary laboratory course with exposures to sensing, reasoning, and acting for physically-embodied systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ROB550/";
            },},{id: "projects-underwater-vehicle-with-dual-manipulators",
          title: 'Underwater Vehicle with Dual Manipulators',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/UVMS/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%67%6A%69%65%62@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=YsGfIU8AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mingjieb", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mingjie-bi-a81307176", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6825-1445", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
