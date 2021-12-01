import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList, TodoItem, TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  constructor(service: TodolistService) {
    this.service = service;
  }
  get obsTodoList(): Observable<TodoList> {
    return this.service.observable;
  }
  // sert a injecter le service todolist
  service: TodolistService;
  // Version Prof
  /*updateItem(item: TodoItem, u: Partial<TodoItem>): void {
    this.service.update(u, item);
  }*/
  // ma version
  f: (() => boolean) | undefined;
  append(label: string): void {
    this.service.append(label);
  }
  uptdateVal(val: any, item: TodoItem): void {
    this.service.update(val, item);
  }
  supprItem(item: TodoItem): void {
    this.service.remove(item);
  }

  ngOnInit(): void {
  }
  fALL(): boolean {
    return true;
  }

}
