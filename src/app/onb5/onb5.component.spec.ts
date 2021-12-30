import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onb5Component } from './onb5.component';

describe('Onb5Component', () => {
  let component: Onb5Component;
  let fixture: ComponentFixture<Onb5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onb5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
