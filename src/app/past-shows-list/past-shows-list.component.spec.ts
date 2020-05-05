import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastShowsListComponent } from './past-shows-list.component';

describe('PastShowsListComponent', () => {
  let component: PastShowsListComponent;
  let fixture: ComponentFixture<PastShowsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastShowsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastShowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
