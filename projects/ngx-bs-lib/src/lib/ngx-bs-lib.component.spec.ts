import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBsLibComponent } from './ngx-bs-lib.component';

describe('NgxBsLibComponent', () => {
  let component: NgxBsLibComponent;
  let fixture: ComponentFixture<NgxBsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
