import "./style.css";
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#ul");

const addTodo = () => {
  const newListItem = document.createElement("li");
  const span = document.createElement("span");
  const bigContainer = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const markBtn = document.createElement("button");

  deleteBtn.innerText = "Delete";
  editBtn.innerText = "Edit";
  markBtn.innerText = "Mark";
 
  newListItem.className =
    "flex justify-between items-center bg-gray-200 p-3 rounded mb-2";
  deleteBtn.className = "bg-red-500 text-white px-3 py-1 rounded";
  editBtn.className = "bg-blue-500 text-white px-3 py-1 rounded";
  markBtn.className = "bg-green-500 text-white px-3 py-1 rounded";

  span.innerText = input.value;
  bigContainer.append(deleteBtn, editBtn, markBtn);
  list.appendChild(newListItem);
  newListItem.appendChild(bigContainer);
  newListItem.appendChild(span);
  input.value = "";
};

button.addEventListener("click", () => {
   addTodo();
   console.log("Button clicked");
  if (input.value.trim() === "") {
    return;
  }
  
});
