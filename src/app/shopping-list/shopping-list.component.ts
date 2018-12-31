import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Milk (in cups)', 2),
    new Ingredient('Apple', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
