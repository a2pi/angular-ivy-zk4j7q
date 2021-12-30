import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb6Component } from './onb6.component';

describe('Onb6Component', () => {
  let component: Onb6Component;
  let fixture: ComponentFixture<Onb6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
