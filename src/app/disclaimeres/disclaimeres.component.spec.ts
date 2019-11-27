import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimeresComponent } from './disclaimeres.component';

describe('DisclaimeresComponent', () => {
  let component: DisclaimeresComponent;
  let fixture: ComponentFixture<DisclaimeresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
