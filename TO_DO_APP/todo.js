
let todoList =[
  {item:'Read Books',
    dueDate:'30/12/2025'},
   {
    item:'Go To College',
    dueDate:'30/12/2025'}
  ];
displayItems();
function addTodo(){
  let inputElement = document.querySelector
  ('#todo_input');

   let dateElement = document.querySelector
  ('#todo_date');
  let todoItem =inputElement.value;
    let todoDate =dateElement.value;
  // console.log(todoItem);
  todoList.push({item:todoItem,dueDate:todoDate});

inputElement.value ='';
dateElement.value ='';
displayItems();
}
function displayItems(){
  // let displayElement = document.querySelector
  let containerElement = document.querySelector
  ('.todo-container');


let newHtml = '';

 
  // displayElement.innerText='';
  for(let i = 0;i < todoList.length; i++){

    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;

    let{item,dueDate} = todoList[i];      //destructuring
    newHtml += `
    

    <span>${item}</span>
    <span>${dueDate}</span>
    <button      class='button-delete'             onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    
    `;
    // displayElement.innerText = displayElement.

  // innerText + "\n " + todoList[i];

 
}
 containerElement.innerHTML = newHtml
}