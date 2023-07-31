export class Tomato {
    constructor({deadline, pause, bigPause, tasks = []}) {
      if (Tomato._instance) {
            return Tomato._instance;
        }
        this.deadline = deadline;
        this.pause = pause;
        this.bigPause = bigPause;
        this.tasks = tasks;
        this.activeTask = null;
        
        Tomato._instance = this;
    }
    
    returnTime () {
        return [this.deadline, this.pause, this.bigPause, this.tasks, this.activeTask];
    }
    
    addTask (task) {
        this.tasks.push(task);
    }
  
    addActiveTask(activeTask) {
        this.activeTask = activeTask;
        return this.activeTask;
    } 

    startTask(tomato){
        setInterval(() => {
            // console.log(tomato);

            this.deadline -= 1;
            let count = 0;
            if(this.deadline <= 0) {
                this.pause -= 1;
                if(this.pause <= 0 ){
                    count +=1;
                    this.deadline = 1500;
                    this.pause = 300;
                }

                if(count === 3 ){
                    this.bigPause -= 1;
                }
            }
        }, 1000);
    }
  }
  
