import './style.css'
const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('#ul')
const listItem = document.querySelector('#li')  


const addTodo = () => {
   const newListItem = document.createElement('li')
   newListItem.innerText = input.value
   list.appendChild(newListItem)

  input.value = " "
}

button.addEventListener('click' , () => {
  if( input.value === ""){
    
    return;
  };
  addTodo()
  if( input.value.trim() === " "  ) return;

  console.log(input.value)
})
  

  
   




