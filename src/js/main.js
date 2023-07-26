import '../scss/index.scss';

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


class Obj {
  constructor(id, name, count) {
    this.id = id;
    this.name = name;
    this.count = count;
  }

  changeCount() {
    this.count += 1;
  }

  changeName(newName) {
    this.name = newName;
  }
}

const potato = new Obj(1, 'potato', 3);

potato.changeCount();

potato.changeName('pomidorro');

console.log(potato);
