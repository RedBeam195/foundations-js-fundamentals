const secondButton = document.querySelector("#btn");

secondButton.onclick = () => {
  alert("Hello World");
};

const thirdButton = document.querySelector("#btn-two");
thirdButton.addEventListener("click", (e) => {
  alert("Hello World");
  console.log(e.target);
  e.target.style.background = "green";
});

const buttons = document.querySelectorAll(".btn-div button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
