import { TestBed } from '@angular/core/testing';

import { StudentslistService } from './studentslist.service';

describe('StudentslistService', () => {
  let service: StudentslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
