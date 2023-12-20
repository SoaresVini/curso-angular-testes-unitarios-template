import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FillFormComponent } from './fill-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";

describe('FillFormComponent', () => {
  let component: FillFormComponent;
  let fixture: ComponentFixture<FillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve preencher campos do formulario', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'Danilo';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('Danilo')
  });
});
