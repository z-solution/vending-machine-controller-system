import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryPage } from './machinery.page';

describe('MachineryPage', () => {
  let component: MachineryPage;
  let fixture: ComponentFixture<MachineryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
