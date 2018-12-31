import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recepe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('Ramen Noodles', 'A quick snack', 'https://cdn.pixabay.com/photo/2016/02/22/17/05/food-1216048_1280.jpg')
    ];

    constructor() {}
    ngOnInit() { }
}