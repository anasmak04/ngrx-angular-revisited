import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegisterRequest } from 'src/app/models/register-request.interface';
import { AuthActions } from 'src/app/store/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;

  constructor(
    private store$ : Store,
    private formBuilder : FormBuilder,
  private router : Router) { 
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValeus = this.form.getRawValue();
    const request : RegisterRequest = {
      name : formValeus.name,
      email : formValeus.email,
      password : formValeus.name,
      password_confirmation : formValeus.name,
    } 

    this.store$.dispatch(AuthActions.register({request}));
    this.router.navigate(["/login"])
  }

}
