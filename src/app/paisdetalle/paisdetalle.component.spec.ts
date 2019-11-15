import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisdetalleComponent } from './paisdetalle.component';

describe('PaisdetalleComponent', () => {
  let component: PaisdetalleComponent;
  let fixture: ComponentFixture<PaisdetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisdetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
