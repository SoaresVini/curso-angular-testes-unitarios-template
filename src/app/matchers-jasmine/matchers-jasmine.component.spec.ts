import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersJasmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve testar o uso do matcher toEqual', () => {
    expect(true).toEqual(true);
    expect([1,2,3]).toEqual([1,2,3]);
  })

  it('Deve testar o uso dos matcher toBe', () =>{
    let nomes = "Testezin"
    let nomes2 = "Testezin"

    expect(nomes).toBe(nomes2)

  })

  it('Deve testar o uso dos matcher toBeTruthy', () =>{
      expect(true).toBeTruthy()
      expect(18).toBeTruthy()
      expect("Vini").toBeTruthy()
  })

  it('Deve testar o uso dos matcher toBeFalsy', () =>{
      expect('').toBeFalsy()
      expect(null).toBeFalsy()
      expect(NaN).toBeFalsy()
      expect(false).toBeFalsy()
  })

  it('Deve testar o uso dos matcher toBeFalse and toBeTrue', () => {
      let activeFalse = false;
      let activeTrue = true;

      expect(activeFalse).toBeFalse()
      expect(activeTrue).toBeTrue()
  });

  it('Deve testar o uso dos matcher not ', () => {
    expect('Danilo').not.toBeFalsy()
  });

  it('Deve testar o uso dos matcher toContain ', () => {
    let nomes = ['Vini', 'Danilo', "Pedro", "Paulo"];

    expect(['Vini', 'Danilo', "Pedro", "Paulo"]).toContain('Danilo')
  });

  it('Deve testar o uso dos matcher toBeDefined and toBeUndefined', () => {
    let name, coff;
    name = 'café'

    expect(name).toBeDefined()
    expect(coff).toBeUndefined()

  });

  it('Deve testar o uso dos matcher toBeNull', () => {
      expect(null).toBeNull();
  });

  it('Deve testar o uso dos matcher toBeNaN', () => {
      expect(NaN).toBeNaN();
  });

  it('Deve testar o uso dos matcher toBeGreatherThan and toBeLessThan', () => {
      expect(10).toBeGreaterThan(2)
      expect(2).toBeLessThan(10)
  });

  it('Deve testar o uso dos matcher toBeCloseTo', () => {
    expect(10.89).toBeCloseTo(10.89, 1)
  });

  it('Deve testar o uso dos matcher toMatch', () => {
    expect("Marvel").toMatch(/M/)
  });

  it('Deve testar o uso dos matcher toThrow', () => {
    expect(() => {
      throw new Error("Meu Erro")
    }).toThrow()
  });


});


