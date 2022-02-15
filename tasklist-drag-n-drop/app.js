const placeholders = document.querySelector('.placeholder');


const tasks = placeholders.querySelectorAll('.task');

for (const task of tasks) {
  task.draggable = true;
}


placeholders.addEventListener('dragstart', (e) => {
  e.target.classList.add('selected');
})

placeholders.addEventListener('dragend', (e) => {
  e.target.classList.remove('selected');
});



placeholders.addEventListener('dragover', (e) => {
  
  e.preventDefault();

  // Находим перемещаемый элемент
  const activeMovingTask = placeholders.querySelector('.selected');

  // Находим элемент, над которым в данный момент находится курсор
  const currentUnderElement = e.target;

  // Проверяем, что событие сработало:
  // 1. не на том элементе, который мы перемещаем,
  // 2. именно на элементе списка
  const isMoveable = activeMovingTask !== currentUnderElement && currentUnderElement.classList.contains('task');

  // Если нет, прерываем выполнение функции
  if (!isMoveable) {
    return;
  }

  // Находим элемент, перед которым будем вставлять
  const nextElement = (currentUnderElement === activeMovingTask.nextElementSibling) ? currentUnderElement.nextElementSibling : currentUnderElement;

  // Вставляем activeElement перед nextElement
  placeholders.insertBefore(activeMovingTask, nextElement);

  console.log(nextElement);

});