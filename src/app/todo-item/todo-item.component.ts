import {Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../todolist.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  // input des info pour la tâche
  @Input() Data!: TodoItem;
  // output update
  @Output() updateEvt: EventEmitter<Partial<TodoItem>> = new EventEmitter<Partial<TodoItem>>();
  // output remove
  @Output() removeEvt: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @ViewChild('newTextInput') newTextInput!: ElementRef<HTMLInputElement>;
  // tslint:disable-next-line:variable-name
  private _isEditing = false;
  private file: File | undefined;

  constructor() { }
  get isEditing(): boolean {return this._isEditing; }


  ngOnInit(): void {

  }
  // envoie la evenement update
  update(val: any): void {
    this.updateEvt.emit(val);
  }
  // envoie la evenement remove
  remove(): void {
    this.removeEvt.emit();
  }
  // mise en forme pour l'edition
  setEditing(b: boolean): void {
    this._isEditing = b;
    if (b) {
      requestAnimationFrame(
        () => this.newTextInput.nativeElement.focus()
      );
    }
  }
  onFileChanged($event: any): void {
    if ($event !== null && $event !== undefined){
      this.file = $event.target.files[0];
      let JsonFile = JSON.stringify(this.file);
      this.updateEvt.emit(JsonFile);
    }
  }
}

