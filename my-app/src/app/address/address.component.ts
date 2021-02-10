import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      nameControl: ['', Validators.required],
      surnameControl: ['', Validators.required],
      addressControl: ['', Validators.required],
      postalCodeControl: ['', Validators.required],
      telControl: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return 'Rellena este campo, por favor.';
  }

}
