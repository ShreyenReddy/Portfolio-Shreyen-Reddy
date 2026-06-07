const projects = [
  {
    id: 1,
    title: "Morabaraba Game",
    description:
      "Collaborated in a team to develop a feature-rich Morabaraba game in Unity with support for local multiplayer, online multiplayer via Photon PUN 2, and AI opponents. The project includes custom game logic, networked gameplay, and three selectable visual themes: Base Game, Star Wars, and Jujutsu Kaisen, providing a unique twist on the traditional African strategy board game.",
    coverimg: "./imgs/Morabaraba_profile_img.png",
    stack: ["C#", "Unity 3D", "Unity's Photon Pun 2"],
    githubRepo: "https://github.com/KyuriR/ELEN3020Morabaraba",
  },
  {
    id: 2,
    title: "Reverse 2058",
    description:
      "Developed a reverse version of 2048 in C++ where the game starts at 2058 and reduces down to 2. Implemented two AI agents with different strategies—a basic heuristic-based AI and a more advanced decision-making AI—to compete against each other. The system tracks performance by comparing completion time and number of moves taken.",
    coverimg: "./imgs/reverse2058_img.png",
    stack: ["C++", "Code::Blocks"],
    githubRepo: "https://github.com/ShreyenReddy/Reverse-2058-Game",
  },
  {
    id: 3,
    title: "Reptile Dysfunction",
    description:
      "Collaborated in a team to develop a narrative-driven 3D game in Unity, with all assets modelled in Blender and imported into the engine. The game follows a space lizard protagonist who crash-lands on Earth and must explore the environment, collect ship parts, and repair their spacecraft to return home. ",
    coverimg: "./imgs/Reptile-Dysfunction-game.png",
    stack: ["Blender", "C#", "Unity 3D"],
    githubRepo: "https://github.com/Ashrhay/Final_GD_2024",
  },
  {
    id: 4,
    title: "Surviving the world cup Game",
    description:
      "Developed a Unity 6 survival game inspired by the 2026 World Cup, where the player controls the football instead of a traditional player. The objective is to evade AI-controlled international footballers attempting to kick the ball, with gameplay focused on movement, avoidance mechanics, and collision-based interactions.",
    coverimg: "./imgs/surviving-the-world-cup-new.png",
    stack: ["C#", "Unity 3D"],
    githubRepo: "https://github.com/ShreyenReddy/Surviving-the-World-Cup-Game",
  },
]; //generate all cards from this array

function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-project-id", project.id);

  const description = document.createElement("p");
  description.classList.add("card-description");
  description.textContent = project.description;

  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = project.title;

  const divider = document.createElement("div");
  divider.classList.add("card-divider");

  const coverimg = document.createElement("img");
  coverimg.src = project.coverimg;
  coverimg.alt = project.title;
  // To style card itself
  coverimg.classList.add("card-img");

  const stack = document.createElement("div");
  stack.classList.add("card-stack");
  stack.textContent = project.stack;

  const githubLink = document.createElement("a");
  githubLink.href = project.githubRepo;
  githubLink.textContent = "View Repository";
  githubLink.target = "_blank";
  githubLink.classList.add("card-githubLink");

  card.appendChild(coverimg);
  card.appendChild(title);
  card.appendChild(divider);
  card.appendChild(description);
  card.appendChild(stack);
  card.appendChild(githubLink);

  // card.appendChild(title);
  // card.appendChild(coverimg);
  // card.appendChild(divider);
  // card.appendChild(description);
  // card.appendChild(stack);
  // card.appendChild(githubLink);

  return card;
}

//this function doesnt touch DOM until the very last append child
//doesnt put inside container
// change to add one large featured card on top
const container = document.querySelector("#card-container");
projects.map((project, index) => {
  const card = createProjectCard(project);
  if (index === 0) {
    card.classList.add("card-featured"); //Make the first card(index=0) as featured

    container.appendChild(card);

    //create a row div for remaining cards
    const row = document.createElement("div");
    row.classList.add("card-row");
    row.id = "card-row";
    container.appendChild(row);
  } else {
    document.querySelector("#card-row").appendChild(card);
  }
});
//Filter Btn Code
// //Filter that allow users to view projects based on the technology/stack
const categoryFilter = document.querySelector("#category-filter");

categoryFilter.addEventListener("change", function (event) {
  const selectedStack = event.target.value;

  const filteredProjects = projects.filter((project) => {
    if (selectedStack === "all") {
      return project;
    } else {
      return project.stack.includes(selectedStack);
    }
  });

  renderProjects(filteredProjects);
});

function renderProjects(filteredProjects) {
  container.innerHTML = ""; //clears existing cards

  filteredProjects.map((project, index) => {
    const card = createProjectCard(project);
    if (index === 0) {
      card.classList.add("card-featured");
      container.appendChild(card);

      const row = document.createElement("div");
      row.classList.add("card-row");
      row.id = "card-row";
      container.appendChild(row);
    } else {
      document.querySelector("#card-row").appendChild(card);
    }
  });
}

// function renderProjects(filteredProjects) {
//   container.innerHTML = ""; // clears existing cards

//   // always create the row div first
//   const row = document.createElement("div");
//   row.classList.add("card-row");
//   row.id = "card-row";

//   filteredProjects.map((project, index) => {
//     const card = createProjectCard(project);
//     if (index === 0) {
//       card.classList.add("card-featured"); // first result always becomes featured
//       container.appendChild(card);
//       container.appendChild(row); // add row after featured
//     } else {
//       row.appendChild(card); // append to row directly, not querySelector
//     }
//   });
// }
//Controls dropdown feature of filter button
const filterBtn = document.querySelector(".filter-btn");

filterBtn.addEventListener("click", function () {
  if (categoryFilter.style.display === "block") {
    categoryFilter.style.display = "none";
  } else {
    categoryFilter.style.display = "block";
  }
});
// filterBtn.addEventListener("click",function(event)=>
// {

// });

// //Category Filter
// const categoryFilter=document.querySelector("#category-filter");
// categoryFilter.addEventListener("change",function(event)
// {
//   const selectedCategory= event.target.value;
//   //create filtered list of jobs using that category
//   const categorisedJobs=jobs.filter(job=>
//   {
//     if(selectedCategory==="all")
//     {
//       return job;
//     }
//     else
//     {
//       return job.type ===selectedCategory;
//     }
//   });

//   renderJobs(categorisedJobs);
// });

// //1.Render Jobs
// const jobContainer=document.querySelector(".job-container");

// function renderJobs(jobList)
// {

//   jobContainer.innerHTML=" ";
//   //renderJobs(jobs); makes function more flexible instead of multiple doing the same thing
//   jobList.map(job=>
//   {
//     const card=document.createElement("div");
//     card.classList.add("job-card");
//     card.setAttribute('data-id',job.id);

//     card.innerHTML=
//     `<h2>${job.title}</h2>
//     <p>${job.company} - ${job.location}</p>
//     <p>R${job.salary} / month</p>

//     <div class="job-details hidden">
//     <p> Type: ${job.type}</p>
//     <p>About the role: ${job.description}</p>
//     </div>
//     `;
