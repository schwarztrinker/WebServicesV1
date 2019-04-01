import { TestBed } from '@angular/core/testing';

import { SenddataurlService } from './senddataurl.service';

describe('SenddataurlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SenddataurlService = TestBed.get(SenddataurlService);
    expect(service).toBeTruthy();
  });
});
