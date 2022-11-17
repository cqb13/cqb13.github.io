const technologiesContainer = document.getElementById("technologies");
const projectContainer = document.getElementById("projects");
var technologies = getData("tech");
var projects = getData("projects");
createTechnologyComponent(technologies);
createProjectComponent(projects);

// sets up technologies
function createTechnologyComponent(technologies) {
  technologies.forEach((technology) => {
    const technologyComponent = document.createElement("div");
    technologyComponent.classList.add("technology");
    technologyComponent.classList.add("block");
    technologyComponent.innerHTML = `
      <h2>${technology.name}</h2>
    `;
    technologiesContainer.appendChild(technologyComponent);
  });
}

// sets up projects
function createProjectComponent(projects) {
  projects.forEach((project) => {
    const projectComponent = document.createElement("div");
    var githubButton;
    var websiteButton = ``;
    githubButton = `<a href=${project.buttons[0][1]} target="_blank" class="block">${project.buttons[0][0]}</a>`;
    if (project.buttons.length > 1) {
      websiteButton = `<a href=${project.buttons[1][1]} target="_blank" class="block">${project.buttons[1][0]}</a>`;
    }
    projectComponent.classList.add("project");
    projectComponent.classList.add("block");
    projectComponent.innerHTML = `
      <h2>${project.name}</h2>
      <div class="button-container">
          ${githubButton}
          ${websiteButton}
      </div>
      <hr>
      <p>${project.description}</p>
    `;
    projectContainer.appendChild(projectComponent);
  });
}

function getData(file) {
  var request = new XMLHttpRequest();
  request.open("GET", "data/" + file + ".json", false);
  request.send(null);
  var my_JSON_object = JSON.parse(request.responseText);
  return my_JSON_object;
}
