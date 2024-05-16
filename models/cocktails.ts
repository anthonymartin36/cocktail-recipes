export interface Ingredient {
    ingredient: string;
    quantity: string;
}

export interface Cocktail {
    id: number
    title: string
    microChipNumber: string
    description: string
    image: string
    ingredients: Ingredient[];
    directions: string[];
  }

 export interface Data {
    cocktails: Cocktail[];
  }