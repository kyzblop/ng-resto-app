import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit{

  @Input() restaurant: Restaurant;

  types : string[];
  isAddForm: boolean;

  constructor(
    private restaurantService : RestaurantService,
    private router: Router ) { }

  ngOnInit() {
    this.types = this.restaurantService.getRestaurantTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.restaurant.types.includes(type);
  }

  selectType($event : Event, type : string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if  (isChecked) {
      this.restaurant.types.push(type);
    } else {
      const index = this.restaurant.types.indexOf(type);
      this.restaurant.types.splice(index, 1);
    }

  }
 
  isTypeValid(type: string): boolean {
    if(this.restaurant.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if(this.restaurant.types.length > 5 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if(this.isAddForm) {
      this.restaurantService.addRestaurant(this.restaurant)
        .subscribe((restaurant : Restaurant) => this.router.navigate(['/restaurant', restaurant.id]))
    } else {
      this.restaurantService.updateRestaurant(this.restaurant)
        .subscribe(() => this.router.navigate(['/restaurant', this.restaurant.id]));   
    }
  }
    
}
