import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnEnComponent } from './earn-en.component';

describe('EarnEnComponent', () => {
  let component: EarnEnComponent;
  let fixture: ComponentFixture<EarnEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
