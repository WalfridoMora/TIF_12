import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTestEnComponent } from './consult-test-en.component';

describe('ConsultTestEnComponent', () => {
  let component: ConsultTestEnComponent;
  let fixture: ComponentFixture<ConsultTestEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultTestEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultTestEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
