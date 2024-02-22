import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurantList(): Observable<Restaurant[]> {
    // return RESTAURANTS;
    return this.http.get<Restaurant[]>('api/restaurants').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getRestaurantById(restaurantId : Number): Observable<Restaurant|undefined> {
    // return RESTAURANTS.find(restaurant => restaurant.id == restaurantId);
    return this.http.get<Restaurant>(`api/restaurants/${restaurantId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateRestaurant(restaurant : Restaurant): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'})
    };

    return this.http.put('api/restaurants', restaurant, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteRestaurantById(restaurantId: Number): Observable<null> {
    return this.http.delete(`api/restaurants/${restaurantId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    const httpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'})
    };

    return this.http.post<Restaurant>('api/restaurants', restaurant, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  searchRestaurantList(term: string): Observable<Restaurant[]> {

    if(term.length <= 1) {
      return of([]);
    }

    return this.http.get<Restaurant[]>(`api/restaurants/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  private log(response: any) {
    console.table(response)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  
  getRestaurantTypeList(): string[] {
    return [
      'fast-food', 
      'option vege', 
      'halal'
    ];
  }

}
