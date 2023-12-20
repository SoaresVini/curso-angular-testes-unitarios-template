import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import * as http from "http";
import {HttpHeaders} from "@angular/common/http";

describe('HttpService', () => {
  let service: HttpService;
  let htppTestingController: HttpTestingController;
  let url: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    htppTestingController = TestBed.inject(HttpTestingController)
    url = 'http://localhost:3000'
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada GET por id', () => {
    const id = 3;

    service.getUsersById(id).subscribe()

    const request = htppTestingController.expectOne(`${url}/users/${id}`)
    // Simula a requisisão HTTP e não bate no serviço ela moca as coisa
    //expectOne - Ele fica ouvindo as requisões que são ouvidas pela mesma URL e lança uma falhda caso não haja nada

    expect(request.request.method).toBe('GET')//Verifica se o metodo que está send chamado é do tipo GET
    expect(request.request.url).toBe(`${url}/users/${id}`)//Verifica se a URL ta certa
    request.flush({})// Ele responde a requisição com um dado fake, ele diz oq a requisição vai retornar

  });

  it('Deve realizar chamada GET', () => {
    service.getUsers().subscribe()

    const request = htppTestingController.expectOne(`${url}/users`)

    expect(request.request.method).toBe('GET')//Verifica se o metodo que está send chamado é do tipo GET
    expect(request.request.url).toBe(`${url}/users`)
    request.flush({})
  });

  it('Deve realizar chamada POST', () => {

    const user = {
      "id": 0.8230837961873159,
      "name": "Danilo ",
      "email": "danilo@gmail.com",
      "age": "30"
    }

    const response = {
      "id": 0.8230837961873159,
      "name": "Danilo ",
      "email": "danilo@gmail.com",
      "age": "30"
    }

    service.postUser(user).subscribe(resp => {
      expect(resp).toBe(response)
    })

    const request = htppTestingController.expectOne(`${url}/users`)
    expect(request.request.method).toBe('POST')
    request.flush(response)

  });

  it('Deve atualizar usuario PUT', () => {
      const id = 1;
      const user = {
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": "22"
      }

      const response = {
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": "22"
      }

      service.putUser(id, user).subscribe(resp => {
        expect(resp).toBe(response)
      })

    const request = htppTestingController.expectOne(`${url}/users/${id}`)
    expect(request.request.method).toBe('PUT')
    expect(request.request.url).toBe(`${url}/users/${id}`)

    request.flush(response)

  });

  it('Deve excluir Usuario DELETE', () => {
    const id = 2;
    const responce = {};

    service.deleteUser(id).subscribe(resp => {
      expect(resp).toBe(responce);
    })

    const request = htppTestingController.expectOne(`${url}/users/${id}`)

    expect(request.request.method).toBe('DELETE');
    expect(request.request.url).toBe(`${url}/users/${id}`)


    request.flush(responce)
  })

  it('Deve conster headers na requisição', () => {
    service.getUserWithHeaders().subscribe();
    const request = htppTestingController.expectOne(`${url}/users`)

    expect(request.request.headers.has('content-type')).toEqual(true)
    expect(request.request.headers.has('Authorization')).toEqual(true)

  })


});
