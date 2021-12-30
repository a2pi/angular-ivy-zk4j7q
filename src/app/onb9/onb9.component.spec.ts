import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb9Component } from './onb9.component';

describe('Onb9Component', () => {
  let component: Onb9Component;
  let fixture: ComponentFixture<Onb9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
