import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTestEsComponent } from './consult-test-es.component';

describe('ConsultTestEsComponent', () => {
  let component: ConsultTestEsComponent;
  let fixture: ComponentFixture<ConsultTestEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultTestEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultTestEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
