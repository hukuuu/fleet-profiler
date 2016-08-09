import { Component } from '@angular/core';

import { AppState } from '../../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import {CarsMapComponent} from '../../components/map';
import {CardComponent} from '../../components/card';
import {CarsListComponent} from '../../components/cars-list'

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge, CarsMapComponent, CarsListComponent, CardComponent,
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./home.style.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers

  onCarClicked(a) {
    console.log(a)
  }

  cars = []

  constructor(public appState: AppState, public title: Title) {
  }

  ngOnInit() {
    this.cars = [
      {
        "_id": "57a4838c96360f1ab5048f9b",
        "driver": "John Harvey",
        "plates": "СА 8324 КК",
        "isActive": false,
        "latitude": 42.7629333,
        "longitude": 23.3037014
      },
      {
        "_id": "57a4838c601c324bd81c1105",
        "driver": "Harper Lee",
        "plates": "СА 7535 HA",
        "isActive": true,
        "latitude": 42.6141516,
        "longitude": 23.3438016
      },
      {
        "_id": "57a4838c5e0c583f7d3dc9d1",
        "driver": "Martin Hurst",
        "plates": "СА 5411 КO",
        "isActive": true,
        "latitude": 42.770523,
        "longitude": 23.3097493
      },
      {
        "_id": "57a4838ce2c3dd130a383340",
        "driver": "Jeff Mills",
        "plates": "СА 3699 HP",
        "isActive": true,
        "latitude": 42.762909,
        "longitude": 23.3382255
      },
      {
        "_id": "57a4838cf419df803748e091",
        "driver": "Richard Cross",
        "plates": "СА 4490 BB",
        "isActive": true,
        "latitude": 42.5978902,
        "longitude": 23.4252713
      },
      {
        "_id": "57a4838c64e4346662731e4d",
        "driver": "Christian Bell",
        "plates": "СА 3062 AE",
        "isActive": false,
        "latitude": 42.6285915,
        "longitude": 23.3031422
      },
      {
        "_id": "57a4838cc273d2f14477a197",
        "driver": "Dillan Francis",
        "plates": "СА 4413 HE",
        "isActive": true,
        "latitude": 42.7087062,
        "longitude": 23.3779316
      },
      {
        "_id": "57a4838ced6185d2487d6f56",
        "driver": "Steven Spears",
        "plates": "СА 7117 HH",
        "isActive": false,
        "latitude": 42.6350569,
        "longitude": 23.2942041
      },
      {
        "_id": "57a4838c48663a3c26602a16",
        "driver": "Benjamin Ochoa",
        "plates": "СА 6716 EE",
        "isActive": true,
        "latitude": 42.7696852,
        "longitude": 23.3180912
      },
      {
        "_id": "57a4838cf814d34c0da86c5e",
        "driver": "Trevor Princeton",
        "plates": "СА 5920 OO",
        "isActive": false,
        "latitude": 42.6998271,
        "longitude": 23.4188918
      }
    ]    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
