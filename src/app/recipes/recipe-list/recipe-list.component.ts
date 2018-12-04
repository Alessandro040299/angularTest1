import { Component, OnInit, } from '@angular/core';
import {Recipe} from "./recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      "amatriciana",
      "guanciale e sugo",
      "http://finedininglovers-it.cdn.crosscast-system.com/BlogPost/l_3494_Amatriciana.jpg"),

      new Recipe(
        "carbonara",
        "guanciale e uovo",
        "https://www.gustissimo.it/articoli/ricette/pasta-salumi/spaghetti-alla-carbonara.jpg")

  ];

  constructor() { }

  ngOnInit() {
  }

}
