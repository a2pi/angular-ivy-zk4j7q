import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb11Component } from './onb11.component';

describe('Onb11Component', () => {
  let component: Onb11Component;
  let fixture: ComponentFixture<Onb11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
