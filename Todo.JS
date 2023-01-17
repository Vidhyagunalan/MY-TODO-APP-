var form = document.querySelector('form');
var userTodo = document.querySelector('#user-todo');
var todoList = document.querySelector('.todos');
var button = document.querySelector('#clear');
var header = document.querySelector("#todo-header");

var parentTag = document.querySelector('ul');


var createTodo = document.createElement('li');

createTodo.textContent = 'Coding😍'

createTodo.className = 'todos'


var appendChild = parentTag.appendChild(createTodo);

form.addEventListener('submit', function(e){ 
e.preventDefault();
 todoMaker(userTodo.value);
 userTodo.value ='';
});

var todoMaker = function(text){
var createElement = document.createElement('li');
createElement.textContent= text;
createElement.className= 'todos';

parentTag.appendChild(createElement);
}


button.addEventListener('click' , e=> {
    while(parentTag.firstChild){
             parentTag.removeChild(parentTag.firstChild);
        }
} )

 

 
