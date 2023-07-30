import '../scss/index.scss';
import { Tomato } from './modules/timer.js';
import './modules/createTask.js';
import './modules/start.js';

let count = 0;
const imp = ['default', 'important', 'so-so'];
document.querySelector('.button-importance').
    addEventListener('click', ({target}) => {
      count += 1;
      if (count >= imp.length) {
        count = 0;
      }

      for (let i = 0; i < imp.length; i++) {
        if (count === i) {
          target.classList.add(imp[i]);
        } else {
          target.classList.remove(imp[i]);
        }
      }
    });

    const newData = {
      deadline: 1500,
      pause: 300,
      bigPause: 900,
    }
    const tomato = new Tomato(newData);  

    tomato.addTask(`Почистить зубы`);

    tomato.addActiveTask(tomato.tasks[0]);

    tomato.startTask(tomato);

// class Obj {
//   constructor(id, name, count) {
//     this.id = id;
//     this.name = name;
//     this.count = count;
//   }

//   changeCount() {
//     this.count += 1;
//   }

//   changeName(newName) {
//     this.name = newName;
//   }
// }

// const potato = new Obj(1, 'potato', 3);

// potato.changeCount();

// potato.changeName('pomidorro');

// console.log(potato);
