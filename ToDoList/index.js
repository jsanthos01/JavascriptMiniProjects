const addTaskInput = document.querySelector("#addTaskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const taskContainer = document.querySelector("#taskContainer")
let taskList = [];
let completedTasksList = [];

function getStarted() {
    let storedTasks = JSON.parse(localStorage.getItem("taskList"));
    console.log(storedTasks);
    if(storedTasks){
        taskList = storedTasks;
        storedTasks.forEach((task,idx) => {
            taskContainer.innerHTML +=
            `
            <div class="input-group mb-3" id="task-${idx}">
                <li class="list-group-item form-control">${task}</li>
                <div class="input-group-append">
                    <button class="btn btn-danger" type="button" onClick="completedTask('${idx}', '${task}')">
                        <i class="fas fa-trash"></i>                
                    </button>
                    <button class="btn btn-success" type="button" >
                        <i class="fas fa-check-square" ></i>
                    </button>
                </div>
            </div> 
            `
        });

    } else {
        return;
    }

}
addTaskButton.addEventListener("click", () => {
    const taskValue = addTaskInput.value;
    taskList.push(taskValue);
    
    taskContainer.innerHTML="";
    taskList.forEach((task,idx) => {
        taskContainer.innerHTML +=
        `
        <div class="input-group mb-3" id="task-${idx}">
            <li class="list-group-item form-control">${task}</li>
            <div class="input-group-append">
                <button class="btn btn-danger" type="button" onClick="completedTask('${idx}', '${task}')">
                    <i class="fas fa-trash"></i>                
                </button>
                <button class="btn btn-success" type="button" >
                    <i class="fas fa-check-square" ></i>
                </button>
            </div>
        </div> 
        `
    });

    addTaskInput.value = '';
    console.log(taskList)
    localStorage.setItem("taskList", JSON.stringify(taskList));
});

function completedTask( taskId, taskValue){
    completedTasksList.push(taskValue);
    taskList.splice(taskId, 1)
    
    taskContainer.innerHTML="";
    taskList.forEach((task,idx) => {
        taskContainer.innerHTML +=
        `
        <div class="input-group mb-3" id="task-${idx}">
            <li class="list-group-item form-control">${task}</li>
            <div class="input-group-append">
                <button class="btn btn-danger" type="button" onClick="completedTask('${idx}', '${task}')">
                    <i class="fas fa-trash"></i>                
                </button>
                <button class="btn btn-success" type="button" >
                    <i class="fas fa-check-square" ></i>
                </button>
            </div>
        </div> 
        `
    });
    localStorage.setItem("taskList", JSON.stringify(taskList));

}



getStarted();