import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEnComponent } from './plan-en.component';

describe('PlanEnComponent', () => {
  let component: PlanEnComponent;
  let fixture: ComponentFixture<PlanEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
