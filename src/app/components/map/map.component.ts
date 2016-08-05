import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  selector: 'cars-map',
  styleUrls: [ './map.style.css' ],
  templateUrl: './map.template.html',
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class CarsMapComponent {

  @Input('cars') cars: any[];
  @Output() carClicked = new EventEmitter<any>();  

  lat: Number = 42.6949737;
  lng : Number = 23.3353503;
  zoom: Number = 10; 

  getImageUrl (isActive: Boolean): string {
    let color = isActive ? 'green-dot' : 'red-dot';
    return `assets/img/${color}.png`;
  }

  onMarkerClick(car) {
    this.carClicked.emit(car)
  }

}
