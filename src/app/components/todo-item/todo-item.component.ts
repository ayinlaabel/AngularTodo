import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo:  EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //Set Dynamic Classes

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  //Set The Toggle
  onToggle(todo){

     //Toggle On UI
    todo.completed = !todo.completed;

    //Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    })
  }
  //Set The Delete Button
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }
}
