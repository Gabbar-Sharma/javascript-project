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
    "flex d-block justify-between items-center bg-gray-200 p-3 w-full rounded mb-2";
  deleteBtn.className = "cursor-pointer bg-red-500 text-white px-3 py-1 rounded";
  editBtn.className = "cursor-pointer bg-blue-500 text-white px-3 py-1 rounded";
  markBtn.className = "cursor-pointer bg-green-500 text-white px-3 py-1 rounded";
  span.className = "text-gray-800 flex-1 break-words";
  bigContainer.className = "flex gap-2";
  span.innerText = input.value;
  bigContainer.append(deleteBtn, editBtn, markBtn);
  list.appendChild(newListItem);
  newListItem.appendChild(span);
  newListItem.appendChild(bigContainer);
  
  input.value = "";
};

button.addEventListener("click", () => {
  
   console.log("Button clicked");
  if (input.value.trim() === "" || input.value === null) {
    return;
  }
   addTodo();
  
});
