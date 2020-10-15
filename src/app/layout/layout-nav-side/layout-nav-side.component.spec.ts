import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNavSideComponent } from './layout-nav-side.component';

describe('LayoutNavSideComponent', () => {
  let component: LayoutNavSideComponent;
  let fixture: ComponentFixture<LayoutNavSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutNavSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNavSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
