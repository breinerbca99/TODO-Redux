import { state } from '@angular/animations';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Todo } from './model/todo.model';
import * as fromTodo from './todo.actions';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje de airoman');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state = estadoInicial,
  action: fromTodo.Acciones
): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      // Esto es un nuevo arreglo
      return [...state, todo];

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map((todoEdit) => {
        return {
          ...todoEdit,
          completado: action.completado,
        };
      });

    case fromTodo.TOGGLE_TODO:
      // map Crea un nuevo arreglo
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado,
          };
        } else {
          /*  Siempre tenemos que mandar el return para que
             el operador map vuelva a contruir al arreglo */
          return todoEdit;
        }
      });

    case fromTodo.EDITAR_TODO:
      // map Crea un nuevo arreglo
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto,
          };
        } else {
          /*  Siempre tenemos que mandar el return para que
             el operador map vuelva a contruir al arreglo */
          return todoEdit;
        }
      });

    case fromTodo.ELIMINAR_TODO:
      // Regreso todos los todos que su id sea diferente del action.id
      return state.filter((todoEdit) => todoEdit.id !== action.id);

    case fromTodo.ELIMINAR_COMPLETADOS_TODO:
       // Regreso todos los todos que cumplan esta condicion
      return state.filter((todoEdit) => !todoEdit.completado);
    default:
      return state;
  }
}
