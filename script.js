

const buttonAdd = document.querySelector('.button-add')
let taskHTML = document.querySelector('.task-list')
renderTask()

let inputTask = document.getElementById('input-task');
buttonAdd.classList.add('disabled')
inputTask.addEventListener('input', ()=>{
  if(inputTask.value !== ''){
    buttonAdd.disabled = false;
    buttonAdd.classList.remove('disabled')
  } else{
    buttonAdd.disabled = true;
  }
})

buttonAdd.addEventListener('click', () => {
  let input = document.getElementById('input-task').value;
  let id = Math.floor(Math.random() * 100000);
  task.push({
    taskName: input,
    taskId: id
  })

  renderTask()
  saveToStorage()
});

function renderTask(){
  let HTML = ''
  task.forEach((task, index) =>{
    HTML += `
      <div class="task-main">
        <div class="task">
          <div>${index + 1}.</div>
          <div style="margin-left: 10px;">${task.taskName}</div>
        </div>
        <button data-task-id="${task.taskId}" class="button-remove">✕</button>
      </div>
    `
  })
  taskHTML.innerHTML = HTML
  removeTask()
  saveToStorage()
}


function removeTask(){
  const buttonRemove = document.querySelectorAll('.button-remove')
  .forEach((link) =>{
    link.addEventListener('click', ()=>{
      const taskId = Number(link.dataset.taskId)
      console.log(taskId)

      task = task.filter(task => task.taskId !== taskId)
      renderTask()
      saveToStorage()
    })
  })
}

function saveToStorage(){
  localStorage.setItem('task', JSON.stringify(task))
}






