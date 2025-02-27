const projectsSection = document.getElementById('projects');
const technologyFiltersDiv = document.getElementById('technology-filters');
const filterHeader = document.getElementById('filter-header');

if (projectsSection && technologyFiltersDiv && filterHeader) {

  let projectCounter = 1;
  let currentProjectsData = [...projectsData];
  let selectedTechnologies = [];
  let isCollapsed = true;

  function renderProjects(projectsToRender) {
    projectsSection.innerHTML = '';
    projectCounter = 1;

    projectsToRender.forEach(project => {
      const projectArticle = document.createElement('article');
      projectArticle.classList.add('project-item');

      const projectCounterSpan = document.createElement('span');
      projectCounterSpan.classList.add('project-counter');
      projectCounterSpan.textContent = `${projectCounter}. `;
      projectArticle.appendChild(projectCounterSpan);

      const projectNameHeading = document.createElement('h2');
      if (project.websiteLink) {
        const projectNameLink = document.createElement('a');
        projectNameLink.href = project.websiteLink;
        projectNameLink.textContent = project.projectName;
        projectNameLink.target = '_blank';
        projectNameHeading.appendChild(projectNameLink);
      } else {
        projectNameHeading.textContent = project.projectName;
      }
      projectArticle.appendChild(projectNameHeading);

      const technologiesList = document.createElement('ul');
      technologiesList.classList.add('technologies');
      project.technologies.forEach(tech => {
        const techListItem = document.createElement('li');
        techListItem.textContent = tech;
        technologiesList.appendChild(techListItem);
      });
      projectArticle.appendChild(technologiesList);

      if (project.description) {
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.classList.add('description');
        descriptionParagraph.textContent = project.description;
        projectArticle.appendChild(descriptionParagraph);
      }

      const linksDiv = document.createElement('div');
      linksDiv.classList.add('links');

      if (project.websiteLink) {
        const websiteLink = document.createElement('a');
        websiteLink.href = project.websiteLink;
        websiteLink.textContent = 'Live Demo';
        websiteLink.target = '_blank';
        linksDiv.appendChild(websiteLink);
      }
      if (project.youtubeLink) {
        const youtubeLink = document.createElement('a');
        youtubeLink.href = project.youtubeLink;
        youtubeLink.textContent = 'YouTube Tutorial';
        youtubeLink.target = '_blank';
        linksDiv.appendChild(youtubeLink);
      }
      const githubLink = document.createElement('a');
      githubLink.href = project.githubLink;
      githubLink.textContent = 'GitHub Repository';
      githubLink.target = '_blank';
      linksDiv.appendChild(githubLink);

      projectArticle.appendChild(linksDiv);
      projectsSection.appendChild(projectArticle);
      projectCounter++;
    });
  }


  function getUniqueTechnologies(projects) {
    const allTechnologies = projects.reduce((acc, project) => {
      return acc.concat(project.technologies);
    }, []);
    return [...new Set(allTechnologies)].sort();
  }

  function generateTechnologyFilters(technologies) {
    technologyFiltersDiv.innerHTML = '';

    technologies.forEach(tech => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `tech-${tech.replace(/\s+/g, '-').toLowerCase()}`;
      checkbox.value = tech;
      checkbox.classList.add('tech-checkbox');

      const label = document.createElement('label');
      label.htmlFor = `tech-${tech.replace(/\s+/g, '-').toLowerCase()}`;
      label.textContent = tech;

      const filterItem = document.createElement('div');
      filterItem.classList.add('filter-item');
      filterItem.appendChild(checkbox);
      filterItem.appendChild(label);

      technologyFiltersDiv.appendChild(filterItem);

      checkbox.addEventListener('change', handleTechnologyFilterChange);
    });
  }


  function handleTechnologyFilterChange() {
    selectedTechnologies = Array.from(document.querySelectorAll('.tech-checkbox:checked')).map(cb => cb.value);
    applyFilters();
  }


  function applyFilters() {
    let filteredProjects = projectsData;

    if (selectedTechnologies.length > 0) {
      filteredProjects = projectsData.filter(project => {
        return project.technologies.some(tech => selectedTechnologies.includes(tech));
      });
    }

    currentProjectsData = filteredProjects;
    renderProjects(currentProjectsData);
  }

  function toggleCollapsible() {
    isCollapsed = !isCollapsed;
    technologyFiltersDiv.style.display = isCollapsed ? 'none' : 'flex';
    const collapsibleArrow = filterHeader.querySelector('.collapsible-arrow');
    collapsibleArrow.textContent = isCollapsed ? '▼' : '▲';
  }


  const uniqueTechnologies = getUniqueTechnologies(projectsData);
  generateTechnologyFilters(uniqueTechnologies);
  renderProjects(currentProjectsData);

  technologyFiltersDiv.style.display = 'none';
  isCollapsed = true;

  filterHeader.addEventListener('click', toggleCollapsible);


} else {
  console.error("Error: Missing filter elements in index.html.");
}