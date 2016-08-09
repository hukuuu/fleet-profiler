import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cars-list',
  styleUrls: [ './cars-list.style.css' ],
  templateUrl: './cars-list.template.html',
})
export class CarsListComponent {

  @Input('cars') cars: any[];
  // @Output() carClicked = new EventEmitter<any>();  

  // lat: Number = 42.6949737;
  // lng : Number = 23.3353503;
  // zoom: Number = 10; 

  getImageUrl (isActive: Boolean): string {
    let color = isActive ? 'green-dot' : 'red-dot';
    return `assets/img/${color}.png`;
  }

  // onMarkerClick(car) {
  //   this.carClicked.emit(car)
  // }

}
