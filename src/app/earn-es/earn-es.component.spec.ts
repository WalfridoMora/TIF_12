import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnEsComponent } from './earn-es.component';

describe('EarnEsComponent', () => {
  let component: EarnEsComponent;
  let fixture: ComponentFixture<EarnEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
