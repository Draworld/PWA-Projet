import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponentTodolistComponent } from './component-todolist/component-todolist.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentTodolistComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
