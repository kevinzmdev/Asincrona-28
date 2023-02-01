import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  username = '';
  password = '';
  error = '';
  success = '';
  users = [
    {
      username: 'admin',
      password: 'admin',
    },
    {
      username: 'user',
      password: 'user',
    },
  ];

  login() {
    if (this.username === '' || this.password === '') {
      this.error = 'Complete todos los campos';
      return;
    } else {
      const resp = this.loginUser(this.username, this.password);
      if (resp) {
        this.error = '';
        this.username = '';
        this.password = '';
        this.success = 'Login correcto';
      } else {
        this.error = 'Usuario o contraseña incorrectos';
        this.success = '';
      }
    }
  }

  loginUser(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
