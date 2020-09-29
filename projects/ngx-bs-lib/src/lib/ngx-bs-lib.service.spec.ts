import { TestBed } from '@angular/core/testing';

import { NgxBsLibService } from './ngx-bs-lib.service';

describe('NgxBsLibService', () => {
  let service: NgxBsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
