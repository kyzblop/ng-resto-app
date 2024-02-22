import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-add-restaurant',
  template: `
    <h2 class="center">Ajouter un restaurant</h2>
    <app-restaurant-form [restaurant]="restaurant"></app-restaurant-form>
  `
})
export class AddRestaurantComponent implements OnInit {
  restaurant: Restaurant;

  ngOnInit() {
    this.restaurant = new Restaurant();
  }
}
