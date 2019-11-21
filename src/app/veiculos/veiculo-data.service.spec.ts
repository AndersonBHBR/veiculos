import { TestBed } from '@angular/core/testing';

import { VeiculoDataService } from './veiculo-data.service';

describe('VeiculoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeiculoDataService = TestBed.get(VeiculoDataService);
    expect(service).toBeTruthy();
  });
});
