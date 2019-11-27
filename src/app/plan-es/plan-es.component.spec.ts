import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEsComponent } from './plan-es.component';

describe('PlanEsComponent', () => {
  let component: PlanEsComponent;
  let fixture: ComponentFixture<PlanEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
