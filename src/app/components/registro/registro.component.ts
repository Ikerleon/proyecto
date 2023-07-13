import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private router: Router

  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.email === '' || this.password === '') {
      alert('Por favor llene todos los campos');
      return;
    }

    const userData = {
      email: this.email,
      password: this.password
    };

    this.userService.registro(userData)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      
  }
}
