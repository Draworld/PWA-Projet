import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTodolistComponent } from './component-todolist.component';

describe('ComponentTodolistComponent', () => {
  let component: ComponentTodolistComponent;
  let fixture: ComponentFixture<ComponentTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
