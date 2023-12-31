import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string='';
  password: string='';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };
    if (this.email === '' || this.password === '') {
      alert('Por favor llene todos los campos');
      return;
    }

    this.userService.login(loginData)
      .then(response => {
        console.log(response);
        this.router.navigate(['/pagina1']);
      })
      .catch(error => console.log(error));
  }

}



