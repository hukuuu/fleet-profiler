import { Component } from '@angular/core';
import {CarsMapComponent} from '../../components/map';
import {CardComponent} from '../../components/card';
import {CarsListComponent} from '../../components/cars-list'

@Component({
  selector: 'map',
  styleUrls: [ './map.style.css' ],
  templateUrl: './map.template.html',
  directives: [CarsMapComponent, CardComponent, CarsListComponent]
})
export class Map {

  onCarClicked(a) {
    console.log('stana')
    console.log(a)
  }


  cars = []
  ngOnInit() {
    this.cars = [
  {
    "_id": "57a4838c96360f1ab5048f9b",
    "isActive": false,
    "latitude": 42.7629333,
    "longitude": 23.3037014
  },
  {
    "_id": "57a4838c601c324bd81c1105",
    "isActive": true,
    "latitude": 42.6141516,
    "longitude": 23.3438016
  },
  {
    "_id": "57a4838c5e0c583f7d3dc9d1",
    "isActive": true,
    "latitude": 42.770523,
    "longitude": 23.3097493
  },
  {
    "_id": "57a4838ce2c3dd130a383340",
    "isActive": true,
    "latitude": 42.762909,
    "longitude": 23.3382255
  },
  {
    "_id": "57a4838cf419df803748e091",
    "isActive": true,
    "latitude": 42.5978902,
    "longitude": 23.4252713
  },
  {
    "_id": "57a4838c64e4346662731e4d",
    "isActive": false,
    "latitude": 42.6285915,
    "longitude": 23.3031422
  },
  {
    "_id": "57a4838cc273d2f14477a197",
    "isActive": true,
    "latitude": 42.7087062,
    "longitude": 23.3779316
  },
  {
    "_id": "57a4838ced6185d2487d6f56",
    "isActive": false,
    "latitude": 42.6350569,
    "longitude": 23.2942041
  },
  {
    "_id": "57a4838c48663a3c26602a16",
    "isActive": true,
    "latitude": 42.7696852,
    "longitude": 23.3180912
  },
  {
    "_id": "57a4838cf814d34c0da86c5e",
    "isActive": false,
    "latitude": 42.6998271,
    "longitude": 23.4188918
  }
]

  }
}
