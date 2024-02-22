import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RESTAURANTS } from './restaurant/mock-resto-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const restaurants = RESTAURANTS;
    return { restaurants };
  }

}
