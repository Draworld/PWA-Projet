import { Output , EventEmitter } from '@angular/core';
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

  constructor() { }


  ngOnInit(): void {

  }
  uptdate(val: any): void {
    this.updateEvt.emit(val);
  }
  remove(): void {
    this.removeEvt.emit();
  }

}
