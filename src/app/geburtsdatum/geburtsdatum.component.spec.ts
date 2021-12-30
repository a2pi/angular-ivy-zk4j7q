import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeburtsdatumComponent } from './geburtsdatum.component';

describe('GeburtsdatumComponent', () => {
  let component: GeburtsdatumComponent;
  let fixture: ComponentFixture<GeburtsdatumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeburtsdatumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeburtsdatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
