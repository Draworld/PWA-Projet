import {ChangeDetectionStrategy, Component} from '@angular/core';
import { Observable } from 'rxjs';
import {TodoList, TodoItem, TodolistService} from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  //sert a injecter le service todolist
  service: TodolistService;
  constructor(service: TodolistService) {
    this.service = service;
  }
  get obsTodoList(): Observable<TodoList> {
    return this.service.observable;
  }
  append(label: string): void{
    this.service.append(label);
  }
  updateItem(item: TodoItem, u: Partial<TodoItem>): void {
    this.service.update(u, item);
  }
  uptdateVal(val: any, item: TodoItem): void {
    this.service.update(val, item);
  }
  supprItem(item: TodoItem): void{
    this.service.remove(item);
  }
}
