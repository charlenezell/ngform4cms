import { TestBed, inject } from '@angular/core/testing';
import { CmsDataParserService } from './cms-data-parser.service';

describe('CmsDataParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmsDataParserService]
    });
  });

  it('should ...', inject([CmsDataParserService], (service: CmsDataParserService) => {
    expect(service).toBeTruthy();
  }));
});
