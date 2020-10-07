import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/model/todo.model';

import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';

/* Mejorando la logica */
import * as fromFiltroActions from './filter/filter.actions';

/* Sirve para reunificar todos los archivos de la aplicacion */
export interface AppState {
  todos: Todo[];
  filtro: fromFiltroActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  // utiliza las mismas variables del AppState ya que lo implementa
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer,
};
