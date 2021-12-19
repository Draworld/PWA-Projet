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
  @Input() Data!: TodoItem;

  @Output() updateEvt: EventEmitter<Partial<TodoItem>> = new EventEmitter<Partial<TodoItem>>();

  @Output() removeEvt: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @ViewChild('newTextInput') newTextInput!: ElementRef<HTMLInputElement>;
  // tslint:disable-next-line:variable-name
  private _isEditing = false;

  constructor() { }
  get isEditing(): boolean {return this._isEditing; }


  ngOnInit(): void {

  }
  update(val: any): void {
    this.updateEvt.emit(val);
  }
  remove(): void {
    this.removeEvt.emit();
  }

  setEditing(b: boolean): void {
    this._isEditing = b;
    if (b) {
      requestAnimationFrame(
        () => this.newTextInput.nativeElement.focus()
      );
    }
  }
}

