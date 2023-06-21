import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyXeneComponent } from './why-xene.component';

describe('WhyXeneComponent', () => {
  let component: WhyXeneComponent;
  let fixture: ComponentFixture<WhyXeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyXeneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyXeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
