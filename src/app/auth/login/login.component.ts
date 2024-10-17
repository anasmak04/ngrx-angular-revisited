import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginRequest } from 'src/app/models/login-request.interface';
import { AuthActions } from 'src/app/store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private store$: Store) {
    this.form = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const formValues = this.form.getRawValue();
    const request: LoginRequest = {
      email: formValues.email,
      password: formValues.password,
    };

    this.store$.dispatch(AuthActions.login({ request }));
  }
}
