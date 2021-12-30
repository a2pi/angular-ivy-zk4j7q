import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb8Component } from './onb8.component';

describe('Onb8Component', () => {
  let component: Onb8Component;
  let fixture: ComponentFixture<Onb8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
