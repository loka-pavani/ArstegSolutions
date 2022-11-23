import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Todos';
  todos = [];
  tempTodos = []
  todoform = false;
  newTodo = "";
  description = "";
  estimatedHours = 0;
  counter = 0;
  addTodo() {
    let obj = {
      name: this.newTodo,
      id: ++this.counter,
      description: this.description,
      createdDate: new Date(),
      estimatedHours: this.estimatedHours,
      status: "Todo"
    }
    this.todos.push(obj);
    this.todoform = false;
    this.newTodo = ""
    this.description = ""
    this.estimatedHours = 0
  }
  statusChange(value: string, todo: any) {
    todo.status = value;
  }
  deleteTodo(todoId: number) {
    for(let i=0;i < this.todos.length;i++) {
      if(this.todos[i].id === todoId) {
        this.todos.splice(i,1);
        break;
      }
    }
  
  }

  searchTodos(text: string) {
    console.log(text)
    if(text==="") {
      this.todos = [...this.tempTodos]
      return
    }
    this.tempTodos = [...this.todos]
    var temp = []
    for(let i=0;i<this.todos.length; i++) {
      if(this.todos[i].name.includes(text)) {
        temp.push(this.todos[i])
      }
    }
    this.todos = temp
  }
}
