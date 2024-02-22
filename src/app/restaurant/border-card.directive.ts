import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[RestaurantBorderCard]'
})
export class BorderCardDirective {

  private defaultColor : string = '#009688';
  private initialColor : string = '#f5f5f5';
  private defaultHeight : number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('RestaurantBorderCard') borderColor: string; // alias
  @Input() RestaurantBorderCard: string // sans alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height : number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
