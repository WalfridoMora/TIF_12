import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactesComponent } from './contactes.component';

describe('ContactesComponent', () => {
  let component: ContactesComponent;
  let fixture: ComponentFixture<ContactesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
