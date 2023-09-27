//get element and set as new variables
let todoInput = document.querySelector('#todoInput');
const ADDTASK = document.querySelector('#addTask');
let taskList = document.querySelector('#taskList');

//events click add task
ADDTASK.addEventListener('click', function () {
    if (todoInput.value) {
        let new_List = document.createElement('li'); //create new list element
        let added_List = document.createTextNode(todoInput.value); //set variable with new value
        new_List.appendChild(added_List); //inheritnew  value to new list
        taskList.appendChild(new_List); //set input value to new list

        let new_Btn = document.createElement('button');  //create new button element
        let remove_Btn = document.createTextNode('❌');  //set variable with new value
        new_Btn.appendChild(remove_Btn); //ser mew value to new button element
        new_Btn.classList.add('btn'); // add css class to button
        new_List.appendChild(new_Btn); //set button element to list also

        //events click task done
        new_List.addEventListener('click', function (currentTarget) {
            currentTarget.target.classList.toggle('done'); //targert class name done from css toggle mode
        })

        //events click remove task
        new_Btn.addEventListener('click', function (currentTarget) {
            currentTarget.target.closest('li').remove(); //target cclosest list the remove it
        })

        todoInput.value = ''; //reset input value to none 

    }
    else {
        alert('Please input task'); //alert notice
    }
})