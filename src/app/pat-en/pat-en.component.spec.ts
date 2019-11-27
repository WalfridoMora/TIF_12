import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatEnComponent } from './pat-en.component';

describe('PatEnComponent', () => {
  let component: PatEnComponent;
  let fixture: ComponentFixture<PatEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
