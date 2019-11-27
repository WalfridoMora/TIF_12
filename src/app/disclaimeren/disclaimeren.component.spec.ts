import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerenComponent } from './disclaimeren.component';

describe('DisclaimerenComponent', () => {
  let component: DisclaimerenComponent;
  let fixture: ComponentFixture<DisclaimerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
