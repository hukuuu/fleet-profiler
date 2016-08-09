import { Component, Input} from '@angular/core';

@Component({
  selector: 'card',
  styleUrls: [ './card.style.css' ],
  templateUrl: './card.template.html',
})

export class CardComponent {
  @Input('size') size: String;
  private sizeClass;

  ngOnInit() {
    if('small' === this.size) {
      this.sizeClass = "col-md-2"
    }
    if('medium' === this.size) {
      this.sizeClass = "col-md-5"
    }
    if('large' === this.size) {
      this.sizeClass = "col-md-10"
    }  
    if('fullscreen' === this.size) {
      this.sizeClass = "col-md-12"
    }  
  
}
}
