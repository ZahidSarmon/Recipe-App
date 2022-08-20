import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingradientList:ingredient[]=[
    new ingredient('Apple',10),
    new ingredient('Banana',20),
    new ingredient('Orange',30),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
