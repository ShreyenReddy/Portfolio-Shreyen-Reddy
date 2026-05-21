// const projects=
// [
//     {id:1,title:"Morabaraba Game",
//         description:"African Board Game programmed with ",
//         coverimg:"./imgs/Portfolio-img-1.jpeg",
//         stack:["C#","Unity 3D", "Photon Pun 2"]},
//     {id:2,title:"Reverse 2058",
//         description:"Implemented a reverse version of the game 2058 in C++, starting from 2058 and working down to 2",
//         coverimg:"./imgs/portfolio-img-2.jpeg",
//         stack:["C++","Code::Blocks"]},
//     {id:3,title:"Ticket To Ride",
//         description:"Boardgame",
//         coverimg:"./imgs/Portfolio-img-1.jpeg",
//         stack:["C#","Unity 3D"]},
    
// ]; //generate all cards from this array 

// function createProjectCard(project)
// {
//     const card=document.createElement("div");
//     card.classList.add("card");
//     card.setAttribute("data-project-id",project.id);

//     const description=document.createElement("p");
//     description.classList.add("card-description");
//     description.textContent= project.description;

//     const title= document.createElement("h3");
//     title.classList.add("card-title");
//     title.textContent=project.title;

//     const coverimg=document.createElement("img");
//     coverimg.src= project.coverimg;
//     coverimg.alt=project.title;

//     const stack=document.createElement("div");
//     stack.classList.add("card-stack");
//     stack.textContent=project.stack;


//     const button =document.createElement("button");
//     button.classList.add("card-btn");
//     button.textContent="My List";

   
//     card.appendChild(title);
//      card.appendChild(description);
//     card.appendChild(coverimg);
//     card.appendChild(stack);
//     card.appendChild(button);

//     return card;
// }

// //this function doesnt touch DOM until the very last append child
// //doesnt put inside container
// const container=document.querySelector("#card-container");
// projects.map(project=>
// {
//    const card=createProjectCard(project);
//    container.appendChild(card);
// });