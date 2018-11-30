import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators } from '@angular/forms';
import {Router , ActivatedRoute} from '@angular/router';
import { NavbarComponent } from '../Navbar/navbar.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup; submitted = false;

  constructor( private _fb: FormBuilder , private _r: Router) {
      this.registerForm = this._fb.group(
        {
          firstname: ['', [Validators.required ]],
          lastname: ['', [Validators.required , Validators.pattern('[a-zA-Z]{3,}')]],
          username: [ '', [Validators.required, Validators.pattern('[a-zA-Z0-9]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z0-9]{2,}')]],
          password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,14}$')]]
          // gender:  ['' , [Validators.required]],
          // terms: ['', [Validators.required]]


        }
      );
    }

    // get f() { return this.registerForm.controls; }

  ngOnInit() {

  }

  onSubmit(data) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  console.log(data);
     this._r.navigate(['/dashboard']);
      // this.router = NavbarComponent._router;
  }

}
