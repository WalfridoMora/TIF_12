import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlutEnComponent } from './glut-en.component';

describe('GlutEnComponent', () => {
  let component: GlutEnComponent;
  let fixture: ComponentFixture<GlutEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlutEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlutEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
