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
const deleteTodo = () => {
  const removeBtn = document.createElement("remove-btn");
  removeBtn.innerText = "Delete";
  list.appendChild(removeBtn);
  
};

button.addEventListener("click", () => {
  if (input.value === "" || input.value === " " || input.value.trim() === " ") {
    return;
  }
  addTodo();
  deleteTodo();

});



