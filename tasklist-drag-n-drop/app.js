function addTask() {
  const displayFormBtn = document.querySelector('.card-form__button--show');
  const addTaskBtn = document.querySelector('.card-form__button--add');
  const cancelAddTaskBtn = document.querySelector('.card-form__button--cancel');
  const addNameToTaskBtn = document.querySelector('.card-form__name');
  const taskForm = document.querySelector('.card-form');

  let nameTaskValue;

  displayFormBtn.addEventListener('click', () => {

    taskForm.style.display = 'block';
    addTaskBtn.style.display = 'none';

  })

  addNameToTaskBtn.addEventListener('input', e => {
    nameTaskValue = e.target.value;

    if (nameTaskValue) {
      addTaskBtn.style.display = 'block';
    } else {
      addTaskBtn.style.display = 'none';
    }

  })

  cancelAddTaskBtn.addEventListener('click', () => {

    addNameToTaskBtn.value = '';
    nameTaskValue = '';
    taskForm.style.display = 'none';
    addTaskBtn.style.display = 'flex';

  })

  addTaskBtn.addEventListener('click', () => {
    const taskList = document.querySelectorAll('.placeholder');

    const addNewTask = document.createElement('li');
    addNewTask.classList.add('task');
    addNewTask.draggable = true;
    addNewTask.textContent = nameTaskValue;
    taskList[0].append(addNewTask);

    addNameToTaskBtn.value = '';
    nameTaskValue = '';
    taskForm.style.display = 'none';
    addTaskBtn.style.display = 'flex';

    dragNdrop();

  })

}

addTask();


function addBoard() {

  const addBoardBtn = document.querySelector('.add-board');
  const boardParentElement = document.querySelector('.boards');

  addBoardBtn.addEventListener('click', () => {

    const addNewBoard = document.createElement('div');
    addNewBoard.classList.add('task-container');


    addNewBoard.innerHTML = `
        <span contenteditable="true" class="title-board">Введите название доски</span>
        <ul class="placeholder"></ul>
        `;

    boardParentElement.append(addNewBoard);

    editTitleBoard();

    delBoard();

    dragNdrop();

  });

}

addBoard();


function delBoard() {
  const boards = document.querySelectorAll('.task-container');
  const pearentBoard = document.querySelector('.task-container__pearent');

  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];
    if (!board.classList.contains('task-container__pearent')) {
      board.addEventListener('dblclick', () => {

        board.remove();


      })

    }
  }
}


delBoard();



function editTitleBoard() {
  const titleBoard = document.querySelectorAll('.title-board');

  for (let i = 0; i < titleBoard.length; i++) {

    titleBoard[i].addEventListener('click', e => e.target.textContent = '')

  }

}

editTitleBoard();


let dragged = null;

function dragNdrop() {

  const tasks = document.querySelectorAll('.task');
  const placeholders = document.querySelectorAll('.placeholder');




  for (let i = 0; i < tasks.length; i++) {

    const currentTask = tasks[i];

    currentTask.addEventListener('dragstart', () => {

      dragged = currentTask;

      setTimeout(() => {
        currentTask.style.display = 'none';
      }, 0);

    });


    currentTask.addEventListener('dragend', () => {

      setTimeout(() => {
        currentTask.style.display = 'block';
        dragged = null;
      }, 0);

    });

    currentTask.addEventListener('dblclick', (e) => {

      e.stopPropagation()
      currentTask.remove();

    });


    for (let j = 0; j < placeholders.length; j++) {

      const currentList = placeholders[j];

      currentList.addEventListener('dragover', e => e.preventDefault());

      currentList.addEventListener('dragenter', function (e) {

        e.preventDefault();

        this.classList.add('hover');

      });

      currentList.addEventListener('dragleave', function () {

        this.classList.remove('hover');

      });



      currentList.addEventListener('drop', function () {

        this.classList.remove('hover');

        this.append(dragged);

      });

    }

  }

}

dragNdrop();