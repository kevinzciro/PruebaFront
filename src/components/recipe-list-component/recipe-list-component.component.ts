import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../app/models/recipe.model';
import { RecipesService } from '../../app/services/recipes.services';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list-component',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css'
})
export class RecipeListComponentComponent implements OnInit{

  recipes: RecipeModel[];

  constructor(
    private _recipesService: RecipesService,
  ){}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(){
    this._recipesService.getRecipes().subscribe(
        response =>{
          console.log(response);
        }
      )
    }


  }

