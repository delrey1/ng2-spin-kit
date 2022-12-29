import { TestBed } from '@angular/core/testing';

import { Ng2SpinKit2Service } from './ng2-spin-kit2.service';

describe('Ng2SpinKit2Service', () => {
  let service: Ng2SpinKit2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2SpinKit2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
