import { Component,ViewChild } from '@angular/core';
import {ColorfulDirective} from './colorful.directive'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
  @ViewChild('color',{static: false}) color;

  public change():void{
    console.log(this.color,'changeColor')
    this.color.nativeElement.style.color='blue';
  }

  @ViewChild('color2',{static: false}) color2:ColorfulDirective;

  public changeColor():void{
    console.log(this.color2,'changeColor');
    this.color2.changeColor('red');
  }

}
