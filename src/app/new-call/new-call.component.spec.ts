import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCallComponent } from './new-call.component';

describe('NewCallComponent', () => {
  let component: NewCallComponent;
  let fixture: ComponentFixture<NewCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCallComponent]
    });
    fixture = TestBed.createComponent(NewCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
