AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Application Engineer",
    cardImage: "assets/images/experience-page/ansys_logo.png",
    place: "Ansys Software Pvt. Ltd.",
    time: "(Nov, 2023 to Present)",
    desp: "<li>Physics driven simulation enthusiast with the apt for virtualization of real engineering problems</li><li>Expertise in Mechanical fundamentals, FEA simulations, analytical validation, and result interpretation</li><li>Training & mentorship in Ansys Mechanical covering Non-linear, Thermal, Multiphysics, Composite analysis & Automation etc</li>",
  },

  {
    title: "Instructor",
    cardImage: "assets/images/experience-page/IGC_logo.png",
    place: "Freelancer",
    time: "(Nov, 2025 to Present)",
    desp: "<li>Virtually teaching engineering students for GATE Mechanical Engineering courses</li><li>Expertise in Mechanical Engg fundamentals- SOM, Machine Design, Engineering Mechanics, Vibrations</li>",
  },

  {
    title: "Quality Engineer, Scientist C",
    cardImage: "assets/images/experience-page/ISRO_logo.png",
    place: "Indian Space Research Organisation",
    time: "(Dec, 2021 - Oct, 2023)",
    desp: "<li>Involved in the Quality control of Design to Realisation of Fluid Control Components in all Earth Storable Stages of Launch vehicles of India.</li><li>Actively contributed for Chandrayaan 3 mission & Gaganyaan Unmanned mission</li>",
  },

  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/Res_intern.png",
    place: "ISAE SUPAERO, Tolouse, France",
    time: "(May, 2020 - July, 2021)",
    desp: "<li>First acquaintance of Numerical modelling of Geometrically Non-linear and Elastically linear beams in Woven composites</li><li>Reviewed existing, in-house, Numerical model of Straight and Wavy (Taffeta) composite woven fabrics in MATLAB</li><li>Implemented and documented various numerical tests of validation</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
