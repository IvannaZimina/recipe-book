import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Recipes } from './pages/recipes/recipes';
import { RecipeDetail } from './pages/recipe-detail/recipe-detail';
import { Categories } from './pages/categories/categories';
import { Search } from './pages/search/search';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'recipes', component: Recipes },
  { path: 'recipes/:id', component: RecipeDetail },
  { path: 'categories/:id', component: Categories },
  { path: 'search', component: Search },
];
