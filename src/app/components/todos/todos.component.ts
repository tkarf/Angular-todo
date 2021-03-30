import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = '';

  constructor() {}

  //Methods = functions within class

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
    ];
  }
  //toggleDone():void (returns null), toggleDobe():string/number etc -> return "string"
  toggleDone(id: number) {
    //.this = liknande som React class componenter och bindings.
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }
  //Id has to be a number - Typescript
  deleteTodo(id: number) {
    //Returns everything that is not equal to id
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addToDo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
