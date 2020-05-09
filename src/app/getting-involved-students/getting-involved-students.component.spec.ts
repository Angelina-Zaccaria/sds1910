import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingInvolvedStudentsComponent } from './getting-involved-students.component';

describe('GettingInvolvedStudentsComponent', () => {
  let component: GettingInvolvedStudentsComponent;
  let fixture: ComponentFixture<GettingInvolvedStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingInvolvedStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingInvolvedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
