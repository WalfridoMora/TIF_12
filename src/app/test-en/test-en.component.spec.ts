import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEnComponent } from './test-en.component';

describe('TestEnComponent', () => {
  let component: TestEnComponent;
  let fixture: ComponentFixture<TestEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
