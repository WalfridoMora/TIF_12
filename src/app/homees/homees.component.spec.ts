import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeesComponent } from './homees.component';

describe('HomeesComponent', () => {
  let component: HomeesComponent;
  let fixture: ComponentFixture<HomeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
