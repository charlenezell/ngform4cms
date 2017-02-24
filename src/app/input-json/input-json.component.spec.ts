import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputJSONComponent } from './input-json.component';

describe('InputJSONComponent', () => {
  let component: InputJSONComponent;
  let fixture: ComponentFixture<InputJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
