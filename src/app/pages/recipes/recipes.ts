import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RecipeService } from '../../services/recipe';
import { Recipe } from '../../models/recipe.model';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  imports: [AsyncPipe, RecipeCard],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss',
})
export class Recipes {
  // Holds the full list of recipes as an Observable — resolved via the async pipe in the template
  recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.getAll();
  }
}
