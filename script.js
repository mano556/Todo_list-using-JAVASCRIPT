let input=document.getElementById('input')
let button=document.getElementById('button')
let todolist=document.getElementById('todolist')

let todos=[]
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>todolisting(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    console.log(todos)
    localStorage.setItem('todos',JSON.stringify(todos))
    todolisting(input.value)
    input.value=' '
})
function todolisting(x){
    let para=document.createElement('p')
    para.innerText=x
    todolist.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(x)
    })
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove(x)

    })
}
function remove(x){
    let index=todos.indexOf(x)
    if (index>-1){
        todos.splice(index,1)
    }
        localStorage.setItem('todos',JSON.stringify(todos))
}
