import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmEsComponent } from './imm-es.component';

describe('ImmEsComponent', () => {
  let component: ImmEsComponent;
  let fixture: ComponentFixture<ImmEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
