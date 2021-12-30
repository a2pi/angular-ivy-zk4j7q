import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb2Component } from './onb2.component';

describe('Onb2Component', () => {
  let component: Onb2Component;
  let fixture: ComponentFixture<Onb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
