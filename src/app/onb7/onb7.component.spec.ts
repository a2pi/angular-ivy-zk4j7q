import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb7Component } from './onb7.component';

describe('Onb7Component', () => {
  let component: Onb7Component;
  let fixture: ComponentFixture<Onb7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
