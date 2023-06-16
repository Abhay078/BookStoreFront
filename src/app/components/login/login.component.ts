import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  showPass: boolean = false;
  submitted: boolean = false;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder, public _snackBar: MatSnackBar, private user: UserService,private route:Router) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(8)])
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      this._snackBar.open('Login Failed', 'Close');
      return;
    }
    else {

      let loginData = {
        "email": this.LoginForm.value.email,
        "password": this.LoginForm.value.password
      }
      this.user.login(loginData).subscribe((response: any) => {
        console.log(response);
        this._snackBar.open('Login Successful', 'Close');
        localStorage.setItem('token', response.data)
        this.route.navigateByUrl('/dashboard/book');

      }, (error) => {
        console.log(error)
        console.log(error.status);
        this._snackBar.open('Login Unsuccessful', 'Close');
      })

    }

  }

}
