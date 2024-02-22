import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRestaurantComponent } from './restaurant/list-restaurant/list-restaurant.component';
import { DetailRestaurantComponent } from './restaurant/detail-restaurant/detail-restaurant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurant', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
