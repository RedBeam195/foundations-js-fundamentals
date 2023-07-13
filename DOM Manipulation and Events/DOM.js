const container = document.querySelector("#container");
const redParagraph = document.createElement("p");
const blueH3 = document.createElement("h3");

redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red !";
container.appendChild(redParagraph);

blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3 !";
container.appendChild(blueH3);

const nestedDiv = document.createElement("div");
container.appendChild(nestedDiv);
nestedDiv.classList.add("nested");

const nestedH1 = document.createElement("h1");
const nestedParagraph = document.createElement("p");

nestedH1.textContent = "I'm in a div";
nestedDiv.appendChild(nestedH1);

nestedParagraph.textContent = "ME TOO!";
nestedDiv.appendChild(nestedParagraph);
