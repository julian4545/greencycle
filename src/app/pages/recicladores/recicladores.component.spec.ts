import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecicladoresComponent } from './recicladores.component';

describe('RecicladoresComponent', () => {
  let component: RecicladoresComponent;
  let fixture: ComponentFixture<RecicladoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecicladoresComponent]
    });
    fixture = TestBed.createComponent(RecicladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
