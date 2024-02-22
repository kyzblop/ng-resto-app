import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  template: `
    <h2 class="center">Editer {{ restaurant?.name }}</h2>
    <p *ngIf="restaurant" class="center">
      <img [src]="restaurant.picture">
    </p>
    <app-restaurant-form *ngIf="restaurant" [restaurant]="restaurant"></app-restaurant-form>
  `,
  styles: [
  ]
})
export class EditRestaurantComponent implements OnInit {
  restaurant: Restaurant|undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    const restaurantId: string|null = this.route.snapshot.paramMap.get('id');
    if(restaurantId){
      // this.restaurant = this.restaurantService.getRestaurantById(+restaurantId);
      this.restaurantService.getRestaurantById(+restaurantId)
        .subscribe(restaurant => this.restaurant = restaurant);
    } else {
      this.restaurant = undefined;
    }
  }
}
