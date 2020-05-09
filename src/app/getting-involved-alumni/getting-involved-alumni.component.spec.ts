import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingInvolvedAlumniComponent } from './getting-involved-alumni.component';

describe('GettingInvolvedAlumniComponent', () => {
  let component: GettingInvolvedAlumniComponent;
  let fixture: ComponentFixture<GettingInvolvedAlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingInvolvedAlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingInvolvedAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
