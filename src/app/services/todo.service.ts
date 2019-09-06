import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from './../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';


  constructor(private http:HttpClient) {  }

  //Geting Todos
  getTodo():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`);
  }

  //Delete Todo
  deleteTodo(todo: Todo):Observable<Todo>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  //Add Todo
  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions);
  }

  //Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

   
}
