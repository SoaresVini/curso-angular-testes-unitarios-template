import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SpyonServiceService } from './spyon-service.service';
import {of} from "rxjs";

describe('SpyonServiceService', () => {
  let service: SpyonServiceService;
  const logger = jasmine.createSpy("log")
  const status = jasmine.createSpyObj('service',['name', 'age', 'email' ])
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar uma lista de usuarios', () => {

    const response = [
      {
        name: 'Vini',
        age: '19',
        email: "vini.soares.filho@gmail.com"
      },
      {
        name: 'Pedro',
        age: '40',
        email: "pedro.fernando@gmail.com"
      },
      {
        name: 'Jose',
        age: '25',
        email: "fernanda.silva@gmail.com"
      },
    ]

    spyOn(service, 'getUsers').and.returnValue(of(response))

    service.getUsers().subscribe((resp) => {
      expect(resp).toEqual(response)
    })


  });

  it('Deve criar métpdp com jasmine.createSpy', () => {
      logger('Logguei no sistema!')

      expect(logger).toHaveBeenCalledTimes(1)
      expect(logger).toHaveBeenCalledWith('Logguei no sistema!')
  });

  it('Deve criar métpdp com jasmine.createSpyObj ', () => {
      status.name('Danilo')
      status.email('ebudebu@.com.br')

      expect(status.name).toHaveBeenCalledTimes(1)
      expect(status.email).toHaveBeenCalledTimes(1)
      expect(status.email).toHaveBeenCalledWith('ebudebu@.com.br')
  });
});
