import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { transition, trigger, style, animate, state } from '@angular/animations';
import { AuthService as Auth} from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(800)
      ])
    ])
  ]
})


export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auth: Auth) { }

  INPUT_VALID = 'VALID';
  INPUT_INVALID = 'INVALID';
  loginForm: FormGroup;
  invalidInput = false;
  loading = true;
  submitting = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  loginSubmit() {
    if (this.loginForm.controls.password.status === this.INPUT_INVALID || this.loginForm.controls.password.status === this.INPUT_INVALID) {
      this.invalidInput = true;
    } else {
      this.invalidInput = false;
    }
    this.auth.login(this.loginForm.value);
  }

  
}
