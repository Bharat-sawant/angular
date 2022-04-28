/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HousingServiceService } from './HousingService.service';

describe('Service: HousingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousingServiceService]
    });
  });

  it('should ...', inject([HousingServiceService], (service: HousingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
