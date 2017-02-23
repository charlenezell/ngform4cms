import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfieldComponent } from './dfield.component';

describe('DfieldComponent', () => {
  let component: DfieldComponent;
  let fixture: ComponentFixture<DfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
