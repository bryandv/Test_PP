import { TestBed } from '@angular/core/testing';

import { ApiPPService } from './api-pp.service';

describe('ApiPPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPPService = TestBed.get(ApiPPService);
    expect(service).toBeTruthy();
  });
});
