import "./style.css";
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#ul");
const listItem = document.querySelector("#listItem");
const deleteButton = document.querySelector("#delete");
const editButton = document.querySelector("#edit");
const markButton = document.querySelector("#mark");

const addTodo = () => {
  const newListItem = document.createElement("listItem");
  newListItem.innerText = input.value;
  list.appendChild(newListItem);
  input.value = " ";
};
const deleteTodo = () => {
  list.removeChild(list.lastChild);
};

button.addEventListener("click", () => {
  if (input.value === "" || input.value === " " || input.value.trim() === " ") {
    return;
  }
  addTodo();

});
deleteButton.addEventListener("click", () => {
  deleteTodo();
});
editButton.addEventListener("click", () => {
  const lastListItem = list.currentChild;
}
);
markButton.addEventListener("click", () => {
  
  listItem.style.textDecoration = "line-through";
 
}
);

