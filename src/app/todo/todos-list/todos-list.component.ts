import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [
  ]
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // Guardamos la lista de los estados en nuestra variable todos
    this.store.subscribe( state =>{
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

}
