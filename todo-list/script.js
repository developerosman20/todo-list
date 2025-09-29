function getTasks(){return JSON.parse(localStorage.getItem('tasks'))||[];}
function saveTasks(tasks){localStorage.setItem('tasks',JSON.stringify(tasks));}
function renderTasks(){let list=document.getElementById('taskList');list.innerHTML='';getTasks().forEach((t,i)=>{let li=document.createElement('li');li.innerHTML='<span>'+t+'</span><button onclick="deleteTask('+i+')">Sil</button>';list.appendChild(li);});}
function addTask(){let input=document.getElementById('taskInput');let tasks=getTasks();tasks.push(input.value);saveTasks(tasks);input.value='';renderTasks();}
function deleteTask(i){let tasks=getTasks();tasks.splice(i,1);saveTasks(tasks);renderTasks();}
renderTasks();