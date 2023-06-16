import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  RegisterForm!: FormGroup;
  submitted: boolean = false;
  hide: boolean = false;
  constructor(private formbuilder: FormBuilder, public _snackBar: MatSnackBar, private user: UserService) { }

  ngOnInit(): void {
    this.RegisterForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      number: ['', [Validators.required]]
    })

  }
  onSubmit() {
    this.submitted = true;
    if (this.RegisterForm.invalid) {
      this._snackBar.open('SignUp Failed', 'Close');
      return;
    }
    else {
      let registerData = {
        fullName: this.RegisterForm.value.name,
        email: this.RegisterForm.value.email,
        password: this.RegisterForm.value.password,
        mobileNumber: this.RegisterForm.value.mobileNumber

      }
      this.user.registration(registerData).subscribe((res) => {
        console.log(res);
        this._snackBar.open('SignUp Successful', 'Close')

      }, (error) => {
        console.log(error)
        this._snackBar.open('SignUp Failed', 'Close');
      })
    }

  }

}
