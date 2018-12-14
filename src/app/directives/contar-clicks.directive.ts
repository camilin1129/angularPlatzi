import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
    selector: 'li[contar-clicks]'
})
export class ContarClicksDirective{
  clickN = 1;
  @Input('contar-clicks') lugar: any;
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click', ['$event.target']) onClick(btn){
    this.lugar.clicks = this.clickN++;
    this.opacity += .1;
  }
}
