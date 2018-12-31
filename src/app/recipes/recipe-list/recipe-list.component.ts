import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recepe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    recipes = [];

    constructor() {}
    ngOnInit() { }
}