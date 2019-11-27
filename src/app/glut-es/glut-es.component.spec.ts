import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlutEsComponent } from './glut-es.component';

describe('GlutEsComponent', () => {
  let component: GlutEsComponent;
  let fixture: ComponentFixture<GlutEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlutEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlutEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
