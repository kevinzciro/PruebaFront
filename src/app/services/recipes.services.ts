import { HttpClient } from "@angular/common/http";
import { RecipeModel } from "../models/recipe.model";
import { map, Observable } from "rxjs";
import { Injectable } from "@angular/core";

const urlBase = "https://dummyjson.com/";

@Injectable()
export class RecipesService{

  private recipes: RecipeModel[];

  constructor(
    private _httpClient: HttpClient,
  ){}

  getRecipes(): Observable<object>{
    return this._httpClient.get(urlBase + "recipes")
    .pipe(map(data => data));;
  }

}
