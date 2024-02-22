import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantTypeColor'
})
export class RestaurantTypeColorPipe implements PipeTransform {

  transform(type : string): string {
    let color: string;

    switch (type){
      case 'fast-food':
        color = "lime accent-1";
        break;
      
      case 'option vege':
        color = 'green lighten-1';
        break;
      
      case 'option halal':
        color = 'pink lighten-4';
        break;

      default:
        color = 'grey'
        break;
        
    }

    return 'chip ' + color;
  }

}
