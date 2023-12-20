import { TestBed } from '@angular/core/testing';
import { GuardGuard } from './guard.guard';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('GuardGuard', () => {
  let guard: GuardGuard;
  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/login'};
  let routerMock = {navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        { provide: Router, useValue: routerMock }
      ],
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(GuardGuard);
    localStorage.removeItem('token')
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('Deve redirecionar o usuario para pagina de login quando não tiver token', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);

    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('Deve conceder acesso quando o usuario tiver token', () => {
    const token = 'jenffjdfasf';
    localStorage.setItem('token', token);

    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true)
  });
});

