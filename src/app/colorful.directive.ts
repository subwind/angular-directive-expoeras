import { Directive,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[appColorful]',
   // 加上 exportAs
  exportAs: 'colorful'
})
export class ColorfulDirective {
  @Input() appColorful;
  @HostBinding('style.color') get color() {
    console.log(this.appColorful,'directive');
    return this.appColorful || 'red';
  }
  constructor() { }

  public changeColor(color:string) {
    this.appColorful = color;
  }
}