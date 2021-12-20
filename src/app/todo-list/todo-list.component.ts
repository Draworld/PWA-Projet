import {Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';
import { Observable } from 'rxjs';
import {TodoList, TodoItem, TodolistService, tdlToString} from '../todolist.service';

type FctFilter = (item: TodoItem) => boolean;

// @ts-ignore
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @ViewChild('newTextInput') newTextInput!: ElementRef<HTMLInputElement>;

  public allSelected = false;
  // la valeur a placer dans le qrcode
  public TodolistJson: any;
  // afficher ou non le qrcode
  public QrCode = false;
  // fonction de filtrage modifié plus bas
  get f(): (e: TodoItem) => boolean {
    return this._f;
  }
  set f(value: (e: TodoItem) => boolean) {
    this._f = this.Tous;
  }
  public titreEditing = false;
  constructor(service: TodolistService) {
    this.service = service;
    this.TodolistJson = 'valeur TodolistJson pas instancié';
  }
  get obsTodoList(): Observable<TodoList> {
    return this.service.observable;
  }
  // sert a injecter le service todolist
  service: TodolistService;

  updateLabel(label: string): void{
    this.service.updateLabel(label);
    this.setEditing(false);
  }
  append(label: string): void {
    this.service.append(label);
  }
  // update un valeur d'un item
  uptdateVal(val: any, item: TodoItem): void {
    this.service.update(val, item);
  }
  // update all item
  updateAll(val: any, TDL: TodoList): void{

    for (let item of TDL.items) {
      this.service.update(val, item);
    }
  }
  // supprime un item
  supprItem(item: TodoItem): void {
    this.service.remove(item);
  }
  // fonction pour supprimer tout les élément done
  SupprAllCheck( TDL: TodoList): void{
    for (let item of TDL.items) {
      if (item.isDone) {this.service.remove(item); }
    }
  }
  TouSupprimer( TDL: TodoList): void{
    for (let item of TDL.items) {
      this.service.remove(item);
    }
  }
  // fonction pour affichage de tout
  public Tous: FctFilter = (item): boolean => {
    return true;
  }
  // fonction f qui est remplacer pour le filtrage
  _f: ((e: TodoItem) => boolean) = this.Tous;
  // fontion qui renvoie true si !isDone
  public fAFaire: FctFilter = (item): boolean => {
    return !item.isDone;
  }
  // fontion qui renvoie true si isDone
  public fFait: FctFilter = (item: TodoItem): boolean => {
    return item.isDone;
  }
  // fonction qui renvoie le nombre le nombre de tâche restante
  public getNumberItems = (): number => {
    return this.service.getTotalCount();
  }
 // fonction retour arrière
  public retour = (): TodolistService => {
    console.log('dans retour');
    return this.service = this.service.undo();
  }
  // fonction retour avant
  public revenir = (): TodolistService => {
    console.log('dans revenir');
    return this.service = this.service.redo();
  }
  // fait appartaire ou disparaitre un qrcode et met a jour les valeurs QrCode
  public MkQrcode = (TDL: TodoList ): void => {
    this.QrCode = !this.QrCode;
    this.TodolistJson = tdlToString(TDL);
  }
  // met a jour le qrcode
  public upQrcode = (TDL: TodoList ): void => {
    this.TodolistJson = tdlToString(TDL);
    alert('QRCODE Actualisé');
  }
  setEditing(b: boolean): void {
    this.titreEditing = b;
    if (b) {
      requestAnimationFrame(
        () => this.newTextInput.nativeElement.focus()
      );
    }
  }
  ngOnInit(): void {
  }

}
