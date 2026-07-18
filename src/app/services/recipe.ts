import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

// providedIn: 'root' registers this service once for the whole app —
// no need to add it to any component's providers manually
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // Base URL of our backend API — every request below builds on top of this
  private apiUrl = 'http://localhost:3000/api/recipes';

  // Angular injects HttpClient automatically via the constructor
  constructor(private http: HttpClient) {}

  // Fetch all recipes from the backend.
  // Returns an Observable (a stream) rather than the data directly —
  // the caller must .subscribe() to actually trigger the request and read the result.
  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  // Fetch a single recipe by its MongoDB _id
  getById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }
}
