import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle ALL todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const ELIMINAR_TODO = '[TODO] Eliminar todo';
export const ELIMINAR_COMPLETADOS_TODO = '[TODO] Eliminar All todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  /* En que estado quiere que ponga las tareas */
  constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public id: number, public texto: string) {}
}

export class EliminarTodoAction implements Action {
  readonly type = ELIMINAR_TODO;

  constructor(public id: number) {}
}

export class EliminarCompletadosTodoAction implements Action {
  readonly type = ELIMINAR_COMPLETADOS_TODO;

  constructor() {}
}

export type Acciones =
  | AgregarTodoAction
  | ToggleTodoAction
  | ToggleAllTodoAction
  | EditarTodoAction
  | EliminarTodoAction
  | EliminarCompletadosTodoAction;
