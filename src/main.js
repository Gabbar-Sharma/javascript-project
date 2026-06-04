import "./style.css";
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#ul");
const listItem = document.querySelector("#listItem");

const addTodo = () => {
  const newListItem = document.createElement("listItem");
  newListItem.innerText = input.value;
  list.appendChild(newListItem);
  input.value = " ";
};

button.addEventListener("click", () => {
  if (input.value === "" || input.value === " " || input.value.trim() === " ") {
    return;
  }
  addTodo();
});
