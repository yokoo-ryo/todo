const taskValue = document.getElementsByClassName("task_value")[0];
const taskSubmit = document.getElementsByClassName("task_submit")[0];
const taskList = document.getElementsByClassName("task_list")[0];
const taskDate = document.getElementsByClassName("task_date")[0];

function addTasks(tasks, date) {
    const listItem = document.createElement("li");
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = `${tasks} ${date}まで `;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = ("削除");
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
}

const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest("li");
    taskList.removeChild(chosenTask);
};

taskSubmit.addEventListener("click", evt => {
    evt.preventDefault();
    const tasks = taskValue.value;
    const date = taskDate.value;
    addTasks(tasks, date);
    taskValue.value = "";
    taskDate.value = "" ;
});

