const addtask=document.getElementById("add-task")
const tasklist=document.getElementById("task-list")
const taskinput=document.getElementById("task-input")
const cleartask=document.getElementById("clear-tasks")
const sorts=document.getElementById("sort")
const submit=document.getElementById("submit")  


taskinput.addEventListener('keypress',()=>{
    if(event.key=="Enter"){
        tasklist.innerHTML+=`<li>${taskinput.value}</li>`
        taskinput.value=""
    }
})

addtask.addEventListener('click',()=>{
    tasklist.innerHTML+=`<li>${taskinput.value}</li>`
})

cleartask.addEventListener('click',()=>{
    tasklist.innerHTML=" "
    console.log("task cleared")
})

sorts.addEventListener(('click'),()=>{
   
}
)

submit.addEventListener('click',()=>{
    tasklist.innerHTML+=`<li>${taskinput.value}</li>`
})