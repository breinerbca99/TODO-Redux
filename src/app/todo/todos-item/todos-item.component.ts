import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditarTodoAction, Acciones, EliminarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: [],
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chkField: FormControl; // Para el check de las tareas
  txtInput: FormControl; // Para el texto
  editando: boolean; // Para saber si estoy editando
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    /* console.log(this.todo); */
    /* Cada vez que se cambie el valor del chkField */
    this.chkField.valueChanges.subscribe((valor) => {
      console.log(valor);
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editar(): void {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;
    if(this.txtInput.invalid){
      return;
    }
    if(this.txtInput.value === this.todo.texto){
      return;
    }
    const accion = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);
  }

  borrarTodo(): void{
    const accion = new EliminarTodoAction(this.todo.id);
    this.store.dispatch( accion );
  }
}
