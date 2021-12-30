import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb3Component } from './onb3.component';

describe('Onb3Component', () => {
  let component: Onb3Component;
  let fixture: ComponentFixture<Onb3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
