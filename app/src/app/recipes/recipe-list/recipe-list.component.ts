import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList:RecipeModel[]=[
    new RecipeModel('Cake',"The Cake is sweet","https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
    new RecipeModel('Dry Cake',"The Cake is bad","https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
    new RecipeModel('Wet Cake',"The Cake is better","https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
