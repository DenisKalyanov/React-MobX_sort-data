import { makeAutoObservable, makeObservable, observable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: "first", completed: false },
    { id: 2, title: "second", completed: true },
    { id: 3, title: "third", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
    // makeObservable() для детальной настройки
    
  }

  addTodo(todo: any) {
    this.todos.push(todo);
  }

  removeTodo(id: any) {
    this.todos = this.todos.filter((elem) => elem.id !== id);
  }

  completedTodo(elem: any) {
    elem.completed = !elem.completed;
    console.log(this.todos);
    
  }
}

export default new Todo();
