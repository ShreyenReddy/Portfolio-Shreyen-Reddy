const projects = [
  {
    id: 1,
    title: "Morabaraba Game",
    description: "African Board Game programmed with ",
    coverimg: "./imgs/Morabaraba_profile_img.png",
    stack: ["C#", "Unity 3D", "Photon Pun 2"],
  },
  {
    id: 2,
    title: "Reverse 2058",
    description:
      "Implemented a reverse version of the game 2058 in C++, starting from 2058 and working down to 2",
    coverimg: "./imgs/reverse2058_img.png",
    stack: ["C++", "Code::Blocks"],
  },
  {
    id: 3,
    title: "Ticket To Ride",
    description: "Boardgame",
    coverimg: "./imgs/TTR Board.png",
    stack: ["C#", "Unity 3D"],
  },
  {
    id: 3,
    title: "Surviving the world cup Game",
    description: "Game based on being the ball instead of a world cup player ",
    coverimg: "./imgs/Surviving-the-world-cup.png",
    stack: ["C#", "Unity 3D"],
  },
]; //generate all cards from this array

function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-project-id", project.id);

  const description = document.createElement("p");
  description.classList.add("card-description");
  description.textContent = project.description;

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = project.title;

  const coverimg = document.createElement("img");
  coverimg.src = project.coverimg;
  coverimg.alt = project.title;
  // To style card itself
  coverimg.classList.add("card-img");

  const stack = document.createElement("div");
  stack.classList.add("card-stack");
  stack.textContent = project.stack;

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(coverimg);
  card.appendChild(stack);

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
