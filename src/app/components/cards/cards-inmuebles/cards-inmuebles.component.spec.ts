import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInmueblesComponent } from './cards-inmuebles.component';

describe('CardsInmueblesComponent', () => {
  let component: CardsInmueblesComponent;
  let fixture: ComponentFixture<CardsInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsInmueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
