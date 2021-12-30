import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb10Component } from './onb10.component';

describe('Onb10Component', () => {
  let component: Onb10Component;
  let fixture: ComponentFixture<Onb10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
