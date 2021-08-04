import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-project1';

  
  public message:string="Color Tool";

   public colors:string[]=[
     "Black","Red","Blue","Green","Yellow",
   ];

   public newColor:string="";


   public addColor(){
     this.colors.push(this.newColor);
   }
}
