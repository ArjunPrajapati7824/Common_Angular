import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //pass title to another component which is login Component
  title='HelloWorld'
  datapass = 100
  // data = 'HelloWorld from App Component';

  updataChild(){
    this.datapass=Math.floor(Math.random()*1000)
  }
 
  data=[
    {name:"Arjun" , email: "Arjun@gmai.com "},
    {name:"Sanjay" , email: "Sanjay@gmai.com "},
    {name:"Arvind" , email: "Arvind@gmai.com "},
    {name:"Himmat" , email: "Himmat@gmai.com "},
    {name:"Rakesh" , email: "Rakesh@gmai.com "},
  ]

  dataChild=''
  updateData(item:string){
    this.dataChild=item
    console.warn(item)
  }

  name:any


}
