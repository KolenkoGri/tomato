const addBtn = document.querySelector('.task-form__add-button');
const taskName = document.querySelector('.task-name');
const tasks = document.querySelector('.pomodoro-tasks__quest-tasks');
const taskForm = document.querySelector('.task-form');

addBtn.disabled = true;
addBtn.style.background = 'grey';
addBtn.style.cursor = 'not-allowed';

const createTask = (important ='', task = '') => {
    const listTask = document.querySelectorAll('.pomodoro-tasks__list-task');

    const elem = document.createElement('li');
    elem.classList.add(`pomodoro-tasks__list-task`, `${important}`);
    const span = document.createElement('span');
    span.classList.add('count-number');
    span.textContent = listTask.length + 1;
    const btn = document.createElement('button');
    btn.classList.add('pomodoro-tasks__task-text', 'pomodoro-tasks__task-text_active');
    btn.textContent = task;
    const btn2 = document.createElement('button');
    btn2.classList.add('pomodoro-tasks__task-button');
    elem.append(span, btn, btn2);
    tasks.append(elem);
}

taskName.addEventListener('input', () => {
    if(taskName.value.trim().length === 0) {
        addBtn.disabled = true;
        addBtn.style.background = 'grey';
        addBtn.style.cursor = 'not-allowed';
    }

    addBtn.disabled = false;
    addBtn.style.background = '#DC0D27';
    addBtn.style.cursor = 'pointer';

})

const popupMenu = (element) => {
    for (let i = 0; i < element.childNodes.length; i++) {
        const item = element.childNodes[i];
        if(item.classList.contains('burger-popup')){
            item.remove();
            return;
        }
    }

    const div = document.createElement('div');
    div.classList.add('burger-popup', 'burger-popup_active');
    const btn = document.createElement('button');
    btn.classList.add('popup-button', 'burger-popup__edit-button');
    btn.textContent = 'Редактировать';
    const btn2 = document.createElement('button');
    btn2.classList.add('popup-button', 'burger-popup__delete-button');
    btn2.textContent = 'Удалить';
    div.append(btn, btn2);
    
    element.append(div);
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskName.value;
    const importance = taskForm.querySelector('[name="importance"]').className.split(' ').pop(); 
    createTask(importance,task);
    taskForm.reset();
    tasks.addEventListener('click', (e) => {
        const target = e.target;
        if(target.className === 'pomodoro-tasks__task-button'){
            console.log(target.closest('.pomodoro-tasks__list-task'));
            popupMenu(target.closest('.pomodoro-tasks__list-task'));
        }

    })

});
