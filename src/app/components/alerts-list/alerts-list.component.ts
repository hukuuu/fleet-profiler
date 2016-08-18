import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alerts-list',
  styleUrls: [ './alerts-list.style.css' ],
  templateUrl: './alerts-list.template.html',
})
export class AlertsListComponent {

  @Input('alerts') alerts: any[];

}
