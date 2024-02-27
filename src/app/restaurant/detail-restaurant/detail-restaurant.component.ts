import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styles: [
  ]
})
export class DetailRestaurantComponent implements OnInit{

  restaurantList : Restaurant[];
  restaurant : Restaurant | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private restaurantService : RestaurantService
  ) {}

  ngOnInit() {
    const restaurantId: string | null = this.route.snapshot.paramMap.get('id')
    
    if(restaurantId) {
      // this.restaurant = this.restaurantService.getRestaurantById(+restaurantId);
      this.restaurantService.getRestaurantById(+restaurantId)
        .subscribe(restaurant => this.restaurant = restaurant)
 
    }
  }

  goToRestaurantList() {
    this.router.navigate(['/restaurant'])
  }

  goToEditRestaurant(restaurant: Restaurant) {
    this.router.navigate(['edit/restaurant/', restaurant.id])
  }

  deleteRestaurant(restaurant: Restaurant) {
    this.restaurantService.deleteRestaurantById(restaurant.id)
      .subscribe(() => this.goToRestaurantList());
  }

  reserver() {
    let url : string | undefined;
    url = this.restaurant?.reservationLink
    window.open(url, "_blank");
  }
}
