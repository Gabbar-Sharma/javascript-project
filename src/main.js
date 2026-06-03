import './style.css'
const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('#ul')
const listItem = document.querySelector('#li')  


button.addEventListener('click', () =>{
  const newListItem = document.createElement('li')
  newListItem.innerText = input.value
  list.appendChild(newListItem)
  //yesterday I was trying to add the list item to the list but it was not working because I was trying to add the list item to the list item instead of the list. So I changed the code to add the list item to the list and it worked.

  

  
   input.value = " "


})

