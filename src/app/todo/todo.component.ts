import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent implements OnInit {
  completado = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll(): void {
    this.completado = !this.completado;
    const accion = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(accion);
  }
}
