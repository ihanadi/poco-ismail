let list = document.getElementById('myList');
let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let clearBtn = document.getElementById('myList');


function addItem(text){
    let item = document.createElement('li');
    let textEl = document.createTextNode(text);
    item.appendChild(textEl);
    

    // remove item from List
    let removeEl = document.createElement('span');
    let removeElText = document.createTextNode('\u00D7');
    removeEl.appendChild(removeElText);
    removeEl.className = 'remove';
    removeEl.addEventListener('click' , function(){
        list.removeChild(item)
    });
    item.appendChild(removeEl);


    // Add line through in Item
    item.addEventListener('click' , function(){
        item.classList.toggle('checked')
    });
    list.appendChild(item);
    
    }
    taskInput.addEventListener('keyup', function(event){
        if(event.keyCode === 13){
            addBtn.click();
        }
    });



    // Add new Item in List
    window.addEventListener('DOMContentLoaded', function(event) {

        addBtn.addEventListener('click', function(){
            if (taskInput.value !== ''){
                addItem(taskInput.value);
            }
            taskInput.value = '';
            
        })



    });


    function removeAll(){
        document.getElementById("myList").innerHTML = "";
    }