import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb4Component } from './onb4.component';

describe('Onb4Component', () => {
  let component: Onb4Component;
  let fixture: ComponentFixture<Onb4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
