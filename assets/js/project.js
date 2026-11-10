/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Material model insights",
    cardImage: "assets/images/project-page/Material_setup.png",
    description: " Stress-Strain analysis of a unit cell with Elastic & Elastoplastic material model in Ansys Mechanical simulation ",
    tagimg: "Complete Details in link",
    Githublink: "https://github.com/chetanmhwr1111/Material_model_insights",
  },
  {
    title: "2 DOF Spring Mass system validation",
    cardImage: "assets/images/project-page/2_DOF_analysis.png",
    description: "2 DOF spring mass system simulation correlation with Numerical calculation using Python command",
    tagimg: "Complete Details in link",
    Githublink: "https://github.com/chetanmhwr1111/2_DOF_spring_mass_system_validation",
  },
  {
    title: "GATE Mechanical Class",
    cardImage: "assets/images/project-page/teaching.png",
    description: "",
    tagimg: "Complete Details in link",
    Githublink: "https://github.com/chetanmhwr1111/Teaching-Mentoring-Career-guidance-Interview-preperation",
  },
  {
    title: "GATE Mechanical MCQ Quiz app",
    cardImage: "assets/images/project-page/MechQ_app.png",
    description: "",
    tagimg: "Complete Details in link",
    Githublink: "https://github.com/chetanmhwr1111/MechQ_App",
  },
  {
    title: "Automation : Ansys Mechanical Object-Generator",
    cardImage: "assets/images/project-page/object_generator.png",
    description: "",
    tagimg: "Complete Details in link",
    Githublink: "https://github.com/chetanmhwr1111/Ansys-Mechanical-Object-generator-demo"
  },
  {
    title: "Configuring Bank FD & loan rate MCPs on Antigravity IDE",
    cardImage: "assets/images/project-page/mcp_fdrates.png",
    description: "",
    tagimg: "Complete Details in link",
    Githublink: "https://github.com/chetanmhwr1111/Configuring-Bank-FD-loan-rate-MCPs-on-Antigravity-IDE"
  },
  {
    title: "Customizable local Database Management dashboard",
    cardImage: "assets/images/project-page/local_database_management_dashboard.png",
    description: "",
    tagimg: "Complete Details in link",
    Githublink: "https://github.com/chetanmhwr1111/CA_consulting_dashboard"
  },
  {
    title: "Busbar analysis-Electro Thermo Structural coupled problem",
    cardImage: "assets/images/project-page/TMS_1.png",
    description: "",
    tagimg: "Complete Details in link",
    Githublink: "https://github.com/chetanmhwr1111/Electro-Thermo-Structural-analysis"
  },
];

const GITHUB_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;

// function for rendering project cards data
const showCards = () => {
  if (!projectcards) return;
  let output = "";
  projects.forEach(({ title, cardImage, Githublink }) => {
    const hasLink = Boolean(Githublink);
    const titleHtml = hasLink
      ? `<a href="${Githublink}" target="_blank" rel="noopener">${title}</a>`
      : `<a>${title}</a>`;
    const iconHtml = hasLink
      ? `<li><a href="${Githublink}" class="social-icon" target="_blank" rel="noopener" aria-label="GitHub repository: ${title}">${GITHUB_ICON}</a></li>`
      : "";
    output += `
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
          <div class="wrapper" style="background: url('${cardImage}') center / cover no-repeat;">
            <div class="header"></div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title">${titleHtml}</h1>
                </div>
                <ul class="menu-content">${iconHtml}</ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
  AOS.init(); // init after the cards exist so they animate
};
document.addEventListener("DOMContentLoaded", showCards);

// Search filter (only active if an element with id="myInput" exists on the page)
function myFunction() {
  const input = document.getElementById("myInput");
  if (!input) return;
  const query = input.value.trim().toUpperCase();
  const cards = document.getElementsByClassName("skill-card");
  const titles = document.getElementsByClassName("title");

  for (let i = 0; i < cards.length; i++) {
    const match = titles[i].textContent.toUpperCase().includes(query);
    cards[i].style.display = match ? "" : "none";
  }
}
