import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_angular_practice';
formtitle:string='login form ....';

stringinterpolation(){
  return '50000000'
}
myname='shiva'
gender= true;

isdisabled = false ;

testeventbinding(){
this.myname='swara'
console.log(this.myname);
}
twowaydetabindingtest=898989
}
