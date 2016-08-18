import { Component, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'card',
  styleUrls: ['./card.style.css'],
  templateUrl: './card.template.html',
})

export class CardComponent {
  @Input('size') size: String;
  @Input('parentHeight') parentHeight: number;

  private sizeClass;
  private viewHeight;
 // private ;

  constructor(private elementRef: ElementRef) {
  }


  ngOnInit() {

    if ('small' === this.size) {
      this.sizeClass = "col-md-2"
      // this.viewHeight = this.parentHeight / 3;
      // console.log("viewHeight:");
      // console.log(this.viewHeight);
    }
    if ('medium' === this.size) {
      this.sizeClass = "col-md-5"
    }
    if ('large' === this.size) {
      this.viewHeight = this.parentHeight;
      this.sizeClass = "col-md-10"
    }
    if ('fullscreen' === this.size) {
      this.sizeClass = "col-md-12"
    }
    if ('fullscreen-md-2' === this.size) {
      this.sizeClass = "col-md-12"
    }

  }

}
