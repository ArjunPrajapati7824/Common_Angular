import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
  <!--
  <p class="country">Country Works Properly Own Country component</p>
  <p class="common">common text which have class name in multiple component This Component name is Country</p> -->
  <hr>

  
  <li>{{data1.name}}</li>
  <li>{{data1.email}}</li>
  <hr>
  `,
  styles: [
    `
    .country{color:red}

    li{
      display:inline-block;
      padding:10px;
      background-color:maroon;
      color:white;      
      margin-right:30px;
      border-left:3px solid white;
    }
    `
  ]
})
export class CountryComponent {

  @Input() data1:{name:string,email:string}={name:'',email:''}
  
}
