import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';
import { BorderCardDirective } from './border-card.directive';
import { RestaurantTypeColorPipe } from './restaurant-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { FormsModule } from '@angular/forms';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const restaurantRoutes: Routes = [
  { path: 'edit/restaurant/:id', component: EditRestaurantComponent, canActivate: [AuthGuard]},
  { path: 'restaurant/add', component: AddRestaurantComponent, canActivate: [AuthGuard]},
  { path: 'restaurant', component: ListRestaurantComponent, canActivate: [AuthGuard]},
  { path: 'restaurant/:id', component: DetailRestaurantComponent, canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [
    ListRestaurantComponent,
    DetailRestaurantComponent,
    BorderCardDirective,
    RestaurantTypeColorPipe,
    RestaurantFormComponent,
    EditRestaurantComponent,
    AddRestaurantComponent,
    SearchRestaurantComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(restaurantRoutes)
  ],
  providers: [RestaurantService],
})
export class RestaurantModule { }
