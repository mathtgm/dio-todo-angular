import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/private/model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  constructor() { }

  @Input()
  tarefa: Todo = {
    id: 0,
    atividade: '',
    data: '',
    situacao: false
  }
  @Output()
  removeTodoItem = new EventEmitter();

  setTarefa(tarefa: Todo): void {
    this.tarefa = tarefa;
  }

  setSituacao(): void {
    if(this.tarefa.situacao) {
      this.tarefa.situacao = false;
    } else {
      this.tarefa.situacao = true;
    }
  }

  removerTodo(): void {
    this.removeTodoItem.emit(this.tarefa);
  }
}
