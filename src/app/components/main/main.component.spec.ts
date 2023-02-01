import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('username inicia vacio', () => {
    expect(component.username).toEqual('');
  });

  it('password inicia vacio', () => {
    expect(component.password).toEqual('');
  });

  it('error inicia vacio', () => {
    expect(component.error).toEqual('');
  });

  it('success inicia vacio', () => {
    expect(component.success).toEqual('');
  });

  it('metodo login() funciona correctamente', () => {
    component.username = 'admin';
    component.password = 'admin';
    expect(
      component.loginUser(component.username, component.password) === true
    ).toBeTrue();
  });

  it('metodo login() con fallo funciona correctamente', () => {
    component.username = 'admin';
    component.password = 'admin1';
    expect(
      component.loginUser(component.username, component.password) === false
    ).toBeTrue();
  });

  // Probando evento click de button btnEnviar
  it('Testing de login desde boton Login TRUE', () => {
    // Pasando valores a los atrbutos user y pwd
    component.username = 'admin';
    component.password = 'admin';

    // Detectar el evento click del boton btnEnviar
    const btnEnviar = fixture.debugElement.query(By.css('#botonLogin'));
    btnEnviar.nativeElement.click();

    // Prueba
    expect(component.success).toEqual('Login correcto');
  });

  // Probando evento click de button btnEnviar
  it('Testing de login desde boton Login False', () => {
    // Pasando valores a los atrbutos user y pwd
    component.username = 'admin';
    component.password = 'admin1';

    // Detectar el evento click del boton btnEnviar
    const btnEnviar = fixture.debugElement.query(By.css('#botonLogin'));
    btnEnviar.nativeElement.click();

    // Prueba
    expect(component.error).toEqual('Usuario o contraseña incorrectos');
  });
});
