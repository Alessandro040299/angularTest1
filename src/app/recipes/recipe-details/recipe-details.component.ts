import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe-list/recipe.model";
import { RecipesService } from "src/app/recipes.service";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"]
})
export class RecipeDetailsComponent implements OnInit {
  @Input() currentRicetta: Recipe = null;
  constructor(private service: RecipesService) {}

  ngOnInit() {
    this.service.recipeChanged.subscribe(
      newRecipe => {
        this.currentRicetta = newRecipe;
      },
      error => console.error(error)
    );
  }
}
