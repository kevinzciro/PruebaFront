import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeListComponentComponent } from '../components/recipe-list-component/recipe-list-component.component';
import { RecipeFormComponentComponent } from '../components/recipe-form-component/recipe-form-component.component';
import { RecipesService } from './services/recipes.services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RecipeListComponentComponent,
    RecipeFormComponentComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prueba Tecnica';
}
