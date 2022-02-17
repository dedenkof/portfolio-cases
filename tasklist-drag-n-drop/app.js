let dragged = null;

const tasks = document.querySelectorAll('.task');

const placeholders = document.querySelectorAll('.placeholder');

for (let i = 0; i < tasks.length; i++) {
  
  const currentTask = tasks[i];
  currentTask.addEventListener('dragstart',  () => {

    dragged = currentTask;
    

    setTimeout ( () => {
      currentTask.classList.remove('show') || currentTask.classList.add('hide');
    }, 0);

  });


  currentTask.addEventListener('dragend',  () => {

    setTimeout ( () => {
      currentTask.classList.add('show');
      dragged = null;
    }, 0);

  });



  for (let j = 0; j < placeholders.length; j++){

    const currentList = placeholders[j];

    currentList.addEventListener('dragover',  e => e.preventDefault());


    currentList.addEventListener('dragenter',  function (e) {
      
      e.preventDefault();

      this.classList.add('hover');

    });

    currentList.addEventListener('dragleave',  function (e) {
      
      this.classList.remove('hover'); 

    });

    
    
    currentList.addEventListener('drop',  function (e) {
      
      this.classList.remove('hover');

      this.append(dragged);

      

    }); 


  }


}

  







