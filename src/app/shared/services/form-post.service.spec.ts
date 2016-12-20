/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormPostService } from './form-post.service';

describe('FormPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormPostService]
    });
  });

  it('should ...', inject([FormPostService], (service: FormPostService) => {
    expect(service).toBeTruthy();
  }));
});
