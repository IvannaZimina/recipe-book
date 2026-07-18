import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { RecipeService } from '../../services/recipe';
import { Recipe } from '../../models/recipe.model';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AsyncPipe, RecipeCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Expose the Observable directly — the async pipe in the template
  // will subscribe/unsubscribe automatically and safely trigger view updates
  recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.getAll();
  }
}
