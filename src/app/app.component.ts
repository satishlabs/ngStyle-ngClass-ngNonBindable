import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mycolor:string;
  myfontSize:number;
  myborder:string;
  myborderRadius:number;

  myclassList:string[];

  welcomeMsg:string;

  constructor(){
    this.myfontSize=35;
    this.mycolor="green";
    this.myborder="3px solid red";
    this.myborderRadius=5;
  }
  ngOnInit(){
    this.myclassList = ["burlywood","round"];
    this.welcomeMsg ="Welcome to ATS"
  }

  public apply(color:string,fontSize:number,border:string,borderRadius:number){
    this.mycolor =color;
    this.myfontSize= fontSize;
    this.myborder = border;
    this.myborderRadius = borderRadius
  }

  public changeMyCssClass(cssClass:string):void{
    const pos:number=this.myclassList.indexOf(cssClass);
    if(pos > -1){
      this.myclassList.splice(pos,1);
    }else{
      this.myclassList.push(cssClass);  
    }
  }
}
