import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/private/model/todo.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  atividades: Todo[] = [];

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    if(localStorage.getItem('tarefas') !== null) {
      this.atividades = JSON.parse(localStorage.getItem('tarefas')!);
    }
  }

  criarTarefa(atividade: string, data?: string) {
    if(data === '') {
      data = this.datepipe.transform(new Date(), 'dd/MM/yyyy')?.toString();
    } else {
      data = this.datepipe.transform(new Date(data!), 'dd/MM/yyyy')!.toString()
    }
    let tarefa = new Todo(this.atividades.length + 1, atividade, data!, false);
    this.atividades.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(this.atividades));
  }

  setComplete(index: number) {
    if(this.atividades[index]) {
      this.atividades[index].situacao = false;
    } else {
      this.atividades[index].situacao = true;
    }
  }

  removerTodo(tarefa: Todo) {
    let index = this.atividades.indexOf(tarefa);
    this.atividades.splice(index, 1);
  }

}
