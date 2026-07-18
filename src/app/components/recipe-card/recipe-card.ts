import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  // The parent component passes a single recipe into this card via property binding,
  // e.g. <app-recipe-card [recipe]="someRecipe" />
  @Input({ required: true }) recipe!: Recipe;
}
