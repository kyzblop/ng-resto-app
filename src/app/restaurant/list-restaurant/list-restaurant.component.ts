import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  restaurantList: Restaurant[];
  
  constructor(
    private router: Router,
    private restaurantService : RestaurantService,
    ) 
  {}

  ngOnInit() {
    // this.restaurantList = this.restaurantService.getRestaurantList()
    this.restaurantService.getRestaurantList()
      .subscribe(restaurantList => this.restaurantList = restaurantList)
  }
  

  goToRestaurant(restaurant : Restaurant) {
    this.router.navigate(['restaurant', restaurant.id])
  }

  addRestaurant() {
    this.router.navigate(['/restaurant/add'])
  }
}
