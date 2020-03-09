let list=[];
let currId=null;
const name1 = document.getElementById("name");
const email1 = document.getElementById("email");
const cuAction = document.getElementById("cu-action");
const todoBody = document.getElementById("todo-body");
let id=0;
cuAction.addEventListener('click',addTodo);
function addTodo()
{
        if(currId)
        {
            list=list.map(todo =>
                {
                    if(currId ===  todo.id)
                    {
                        todo.name =name1.value;
                        todo.email =email1.value;
                    }
                    return todo;
                });
                updateValues(null,'Add');
        }
        else{
            list.push({
                id:++id,
                name:name1.value,
                email:email1.value
            });
        }
        buildTbody();
}        
    function reset()
    {
        name1.value ='';
        email1.value='';
    }
function buildTbody(){
    let tBody='';
    list.forEach(todo =>
        {
            const tr = `<tr>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>${todo.email}</td>
            <td>
            <a href="javascript:void(0)" onclick="editTodo(${todo.id})">Edit</a>
            <a href="javascript:void(0)" onclick="deleteTodo(${todo.id})">Delete</a>
            </td>
            </tr>`
        tBody += tr;
        });
        todoBody.innerHTML=tBody;
        reset();
        
}
function updateValues(id,text)
{
    currId = id;
    cuAction.innerHTML = text;
}
function editTodo(id)
{
    const todo = list.find(t=>t.id === id);
        name1.value =todo.name;
        email1.value=todo.email;
        updateValues(id,"Update");
        // buildTbody();
}
  
function deleteTodo(id)
{
    list =list.filter(todo => todo.id != id);
    buildTbody();
}