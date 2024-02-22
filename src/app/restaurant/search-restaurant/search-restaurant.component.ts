import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  
})
export class SearchRestaurantComponent implements OnInit {

  searchTerms = new Subject<string>();
  restaurants$: Observable<Restaurant[]>;

  constructor(
    private router: Router,
    private restaurantService : RestaurantService) {

  }

  ngOnInit(): void { 
    this.restaurants$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.restaurantService.searchRestaurantList(term))
    )
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(restaurant: Restaurant) {
    const link = ['/restaurant', restaurant.id];
    this.router.navigate(link);
  }
}
