import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmEnComponent } from './imm-en.component';

describe('ImmEnComponent', () => {
  let component: ImmEnComponent;
  let fixture: ComponentFixture<ImmEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
