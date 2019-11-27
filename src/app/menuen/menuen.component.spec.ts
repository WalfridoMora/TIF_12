import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuenComponent } from './menuen.component';

describe('MenuenComponent', () => {
  let component: MenuenComponent;
  let fixture: ComponentFixture<MenuenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
