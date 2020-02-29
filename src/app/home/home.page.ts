import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../servicos/todo.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  todos: Todo[];
 
  constructor(private todoService: TodoService) { }
 
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      console.log(res);
      this.todos = res;
    });
  }
 
  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}