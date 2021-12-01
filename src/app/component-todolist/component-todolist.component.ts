import {Component, OnInit} from '@angular/core';
import {TodolistService} from '../todolist.service';

@Component({
  selector: 'app-component-todolist',
  templateUrl: './component-todolist.component.html',
  styleUrls: ['./component-todolist.component.scss']
})
export class ComponentTodolistComponent implements OnInit {
  service: TodolistService;

  constructor(service: TodolistService) {
    this.service = service;
  }

  ngOnInit(): void {
  }

}
