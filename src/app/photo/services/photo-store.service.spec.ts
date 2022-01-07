import { TestBed } from '@angular/core/testing';

import { PhotoStoreService } from './photo-store.service';

describe('PhotoStoreService', () => {
  let service: PhotoStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
