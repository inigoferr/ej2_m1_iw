import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { sizes } from '../data/sizes';
import { sauces } from '../data/sauces';
import { mozzarella } from '../data/mozzarella';
import { ingredients } from '../data/ingredients';

import { Util } from '../util';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent implements OnInit {

  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  formGroup4: FormGroup;

  isEditable = true;
  isOptional = true;

  sizes = sizes;
  sauces = sauces;
  mozzarella = mozzarella;
  stepMozarella = (100 / mozzarella.length);
  ingredients = ingredients;

  product = {
    id: -1,
    name: 'Personalizada',
    price: 18.0,
    quantity: 0
  };

  constructor(private _formBuilder: FormBuilder, public util: Util) { }

  ngOnInit(): void {
    this.formGroup1 = this._formBuilder.group({
      sizeControl: ['', Validators.required]
    });
    this.formGroup2 = this._formBuilder.group({
      sauceControl: ['', Validators.required]
    });
    this.formGroup3 = this._formBuilder.group({
      mozzarellaControl: ['', Validators.required]
    });
    this.formGroup4 = this._formBuilder.group({
      ingredientsControl: ['', Validators.required]
    });

  }

  // Remove or Add Ingredient
  remove(ing) {
    if (ing.quantity > 0)
      ing.quantity -= 1;
  }

  add(ing) {
    if (ing.quantity < 2)
      ing.quantity += 1;
  }

}
