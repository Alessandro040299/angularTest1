import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from './recipes/recipe-list/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
constructor(private serv: RecipesService) {}
  selectedRecipe: Recipe = null;
 onSelectedRecipe(recipe) {
   console.log("ricetta ricevuta dal nonno");
this.selectedRecipe = recipe;
 }

 ngOnInit() {

this.serv.searchRecipe("cake");

 }
}
