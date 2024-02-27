import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantTypeColor'
})
export class RestaurantTypeColorPipe implements PipeTransform {

  transform(type : string): string {
    let color: string;

    switch (type){
      case 'Fast-food':
        color = "lime accent-1";
        break;
      
      case 'Option vege':
        color = 'green lighten-1';
        break;
      
      case 'Option halal':
        color = 'pink lighten-4';
        break;

      case 'Sushi':
          color = 'orange';
          break;

      case 'Italien':
          color = 'red';
          break;

      case 'Fait maison':
          color = 'blue';
          break;

      default:
        color = 'grey'
        break;
        
    }

    return 'chip ' + color;
  }

}
