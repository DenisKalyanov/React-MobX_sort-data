import { makeAutoObservable } from "mobx";

class Counter {
  state = {
    count: 0,
    timer: 60,
  };
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.state.count = this.state.count + 1;
    console.log("increment" + this.state.count);
  }

  decrement() {
    this.state.count = this.state.count - 1;
    console.log("decrement" + this.state.count);
  }

  get total (){
      return `count + timer = ` + this.state.timer + this.state.count;
  }
}

export default new Counter();
