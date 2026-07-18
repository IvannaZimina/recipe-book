// Describes the shape of a single recipe, matching the backend's Mongoose schema
export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  cookingTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  ingredients: Ingredient[];
  instructions: string[];
  createdAt: string;
  updatedAt: string;
}
