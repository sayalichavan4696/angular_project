import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansDetailsComponent } from './jeans-details.component';

describe('JeansDetailsComponent', () => {
  let component: JeansDetailsComponent;
  let fixture: ComponentFixture<JeansDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeansDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeansDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
