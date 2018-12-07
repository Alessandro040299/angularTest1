import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipes/recipe-list/recipe.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  public recipes: Recipe[] = [];
  newRecipes = new EventEmitter<Recipe[]>();
  recipeChanged = new EventEmitter<Recipe>();
  selectedRecipe: Recipe = null;

  URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  public changeSelectedRecipe(ricetta: Recipe) {
    console.log("changeSelectedRecipe", ricetta);
    this.selectedRecipe = ricetta;
  }

  constructor(private http: HttpClient) {}

  searchRecipe(searchTerm: string = "cake") {
    const url_composta = this.URL + searchTerm;
    const response = this.http
      .get(url_composta)
      .toPromise()
      .then((resp: { meals: [] }) => {
        console.log("ricette ricevute", resp);

        if (resp.meals) {
          this.recipes = resp.meals.map(function(meal: any) {
            console.log(meal);
            const myRecipe = new Recipe(
              meal.strMeal,
              meal.strInstructions,
              meal.strMealThumb
            );
            return myRecipe;
          });
        } else {
          this.recipes = [];
        }
        console.log("ripulite", this.recipes);

        this.newRecipes.emit(this.recipes);
      })
      .catch(err => {
        console.error("ERRORE!", err);
      });
  }
}
