import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyaccountComponent } from './familyaccount.component';

describe('FamilyaccountComponent', () => {
  let component: FamilyaccountComponent;
  let fixture: ComponentFixture<FamilyaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
