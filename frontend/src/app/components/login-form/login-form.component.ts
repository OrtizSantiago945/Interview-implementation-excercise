import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email : string;
  password : string;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.email == 'user@gmail.com' && this.password == '123456'){
      Swal.fire({
        toast: true,
        icon: 'success',
        text: 'Welcome!',
        showConfirmButton: false,
        position: 'bottom',
        timer: 1000
      }).then(() => this.router.navigate(['/home']));
    }else{
      Swal.fire({
        toast: true,
        icon: 'error',
        text: 'Invalid credentials',
        showConfirmButton: false,
        position: 'bottom',
        timer: 1500
      })
    }
  }

}
