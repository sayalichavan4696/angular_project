import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtDetailsComponent } from './shirt-details.component';

describe('ShirtDetailsComponent', () => {
  let component: ShirtDetailsComponent;
  let fixture: ComponentFixture<ShirtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
