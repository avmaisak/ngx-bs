/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayouNavTopComponent } from './layou-nav-top.component';

describe('LayouNavTopComponent', () => {
  let component: LayouNavTopComponent;
  let fixture: ComponentFixture<LayouNavTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayouNavTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayouNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
