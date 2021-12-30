import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb1Component } from './onb1.component';

describe('Onb1Component', () => {
  let component: Onb1Component;
  let fixture: ComponentFixture<Onb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
