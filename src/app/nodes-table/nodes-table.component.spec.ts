import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesTableComponent } from './nodes-table.component';

describe('NodesTableComponent', () => {
  let component: NodesTableComponent;
  let fixture: ComponentFixture<NodesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodesTableComponent]
    });
    fixture = TestBed.createComponent(NodesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
