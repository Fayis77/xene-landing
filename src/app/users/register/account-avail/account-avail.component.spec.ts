import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAvailComponent } from './account-avail.component';

describe('AccountAvailComponent', () => {
  let component: AccountAvailComponent;
  let fixture: ComponentFixture<AccountAvailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAvailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
