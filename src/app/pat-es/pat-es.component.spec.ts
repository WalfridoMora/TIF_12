import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatEsComponent } from './pat-es.component';

describe('PatEsComponent', () => {
  let component: PatEsComponent;
  let fixture: ComponentFixture<PatEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
