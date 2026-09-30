

let input =  document.querySelector(".task");
let add =  document.querySelector(".add");
let todoinfo = document.querySelector(".todo-info") 
let check = document.querySelector(".check")

add.addEventListener("click",()=>{

     add.innerText = "Add";
    let arr = [];
        
      task = input.value;

      if(!task)
      {
        alert("Enter a task ");
        return;
      }
      
   todoinfo.innerHTML += `
   
              <div class="to-do">
                        <p>
                             <input type="checkbox" name="" " id=""     onchange="completeTodo(this)" > 
                             <p class="todoli">${task}</p>
                           
                               <button id="ed"  onclick="Edit(this) ">Edit</button> 
                               <button id="de"  onclick="removeTodo(this)" >Delete</button>
                            </p>
                    </div>
   `
    
 
   input.value = "";


})

   function completeTodo(checkbox) {

    let todo = checkbox.closest(".to-do");
    let text = todo.querySelector(".todoli");

    if (checkbox.checked) {
        text.style.textDecoration = "line-through";
        text.style.opacity = "0.5";
    } else {
        text.style.textDecoration = "none";
        text.style.opacity = "1";
    }

   }

   function removeTodo(button)
     {
         let todo = button.closest(".to-do");

    todo.remove();
     }

     function Edit(button)
     {
              
    editTodoElement = button.closest(".to-do");

    let taskText = editTodoElement.querySelector(".todoli").innerText;

    input.value = taskText;

    input.focus();

    add.innerText = "Update";
    taskText.innerText = " ";
     }
   

