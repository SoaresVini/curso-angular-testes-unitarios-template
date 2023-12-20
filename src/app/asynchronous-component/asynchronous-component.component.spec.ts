import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousComponentComponent } from './asynchronous-component.component';
import {HttpService} from "../service/http.service";
import {of} from "rxjs";

describe('AsynchronousComponentComponent', () => {
  let component: AsynchronousComponentComponent;
  let fixture: ComponentFixture<AsynchronousComponentComponent>;
  let http: HttpService;

  const response= [
    {
      "name": "Danilo 2",
      "email": "danilo@gmail.com",
      "age": "30",
      "id": 1
    },
    {
      "id": 3,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    },
    {
      "id": 4,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    },
    {
      "id": 0.8230837961873159,
      "name": "Danilo ",
      "email": "danilo@gmail.com",
      "age": "30"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AsynchronousComponentComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve fazer request para obter lista de usuarios', () => {

    spyOn(http, 'getUsers').and.returnValue(of(response))
    component.getUsers();

    expect(component.data).toEqual(response);

  });

  it('Deve fazer uma chamda para obter ista de usuarios com promise', async () => {

    spyOn(http, 'getUsersWithPromise').and.returnValue(Promise.resolve(response))

    await component.getUsersWithPromise()

    expect(component.dataPromise).toEqual(response)

  });

});
