import './style.css'
const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('#ul')
const listItem = document.querySelector('#li')  


button.addEventListener('click', () =>{
  const newListItem = document.createElement('li')
  newListItem.innerText = input.value
  list.appendChild(newListItem)
  

  

  
   input.value = " "


})

