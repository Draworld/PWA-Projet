import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList, TodoItem, TodolistService } from '../todolist.service';

type FctFilter = (item: TodoItem) => boolean;

// @ts-ignore
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  get f(): (e: TodoItem) => boolean {
    return this._f;
  }
  set f(value: (e: TodoItem) => boolean) {
    this._f = this.Tous;
  }
  constructor(service: TodolistService) {
    this.service = service;
  }
  get obsTodoList(): Observable<TodoList> {
    return this.service.observable;
  }
  // sert a injecter le service todolist
  service: TodolistService;


  append(label: string): void {
    this.service.append(label);
  }
  uptdateVal(val: any, item: TodoItem): void {
    this.service.update(val, item);
  }
  updateAll(val: any, TDL: TodoList): void{

    for (let item of TDL.items) {
      this.service.update(val, item);
    }
  }
  supprItem(item: TodoItem): void {
    this.service.remove(item);
  }
  public Tous: FctFilter = (item): boolean => {
    return true;
  }
  _f: ((e: TodoItem) => boolean) = this.Tous;
  public fAFaire: FctFilter = (item): boolean => {
    return !item.isDone;
  }
  public fFait: FctFilter = (item: TodoItem): boolean => {
    return item.isDone;
  }
  public getNumberItems = (): number => {
    console.log("le nombre de items " + this.service.getTotalCount());
    return this.service.getTotalCount();
  }
  ngOnInit(): void {
  }

}
