
let todoList = JSON.parse(localStorage.getItem('todoList')) || [
{
    item: 'doing code',
    dueDate: '01/06/2024',
}
];
displayItem();




function addList(){
    let inputElement = document.querySelector('#text');
    let todoValue = inputElement.value;
    let dateElement = document.querySelector('#todo-date');
    let todoDate = dateElement.value;
    
    todoList.push({item: todoValue, dueDate: todoDate,});
    
    //  console.log(todoList);
     inputElement.value = '';
     dateElement.value = '';
     displayItem();
}

function displayItem(){
    let displayElement = document.querySelector('#todo-container');
    let newHtml = '';
    for(let i = 0; i< todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml += '' + `
        <span> ${item} </span>
        <span> ${dueDate} </span>
       <button id = "my-button" onclick = "todoList.splice(${[i]}, 1);
       displayItem();
       "> delete </button>
       `;
    }
    displayElement.innerHTML = newHtml;
    localStorage.setItem('todoList', JSON.stringify(todoList));
}