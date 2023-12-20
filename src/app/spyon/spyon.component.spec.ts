import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyonComponent } from './spyon.component';

describe('SpyonComponent', () => {
  let component: SpyonComponent;
  let fixture: ComponentFixture<SpyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve logar usurio no sistema ao clicar no botão', () => {
    let spiedComponet = spyOn(component, 'isLogged').and.callThrough()

    component.isLogged() // é como se eu tivesse clicando

    expect(spiedComponet).toHaveBeenCalledTimes(1); //verifico se foi chamado pelo menos um vez
    expect(component.logged).toBe(true); // verifico o valor
  })

});
