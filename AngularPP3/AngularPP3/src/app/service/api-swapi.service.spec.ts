import { TestBed } from '@angular/core/testing';

import { ApiSwapiService } from './api-swapi.service';

describe('ApiSwapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSwapiService = TestBed.get(ApiSwapiService);
    expect(service).toBeTruthy();
  });
});
