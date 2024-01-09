import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  number = 100;
  callFunc() {
    alert("Function Called Successfully");
    document.write("Good Evening")
  }

  callNumber(a: any) {
    this.number++;
    alert(this.number)
    console.warn(a)
  }

  display = '';
  Counter = 0;
  CounterColor = ' '

  callData(val: any) {

    console.warn(val)
    this.display = val;
    // document.getElementById(getVal)?.innerHTML
  }

  counter(val: string) {

    if (val === 'add') {
      this.CounterColor = 'green'
    } else {
      this.CounterColor = 'red'
    }
    val === 'add' ? this.Counter++ : this.Counter--;

  }


  // example of  interpolation v/s Property Binding
  name = "Arjun"
  disable = false



  //Exmaple of angular type property name change with if else conditions
  c = 0
  cc = ''
  counter2(val1: string) {

    if (val1 === 'add') {
      this.cc = 'green'
    } else {
      this.cc = 'red'
    }

    val1 === 'add' ? this.c++ : this.c--;

  }


  //Exaple of hide and show text box using angular if else conditions

  show = '';
  hideShow(val: string) {

    val === 'angular' ? this.show = 'angular' : this.show = 'react'
  }



  //Change color when user click on color button using angular if else conditions
  color = 'unknown'
  changeColor(val: string) {

    // val==='red' ? this.color='red' : val==='blue'? this.color='blue' : val==='maroon'? this.color='maroon' : val==='palevioletred'? this.color='palevioletred' : this.color='green'  
    //one another way to doing this is using switch case    


    this.color = val;

  }


  //Examples of ForLoop in Angular style
  users = ['arjun', 'Manthan', 'Meet', 'Jeel', 'Dev', 'Yash']
  usersDetails = [
    { name: 'Arjun', age: 23, address: 'Parasnagar' },
    { name: 'Manthan', age: 22, address: 'Isanpur' },
    { name: 'Meet', age: 21, address: 'Naroda' },
    { name: 'Jeel', age: 20, address: 'Vastral' },
    { name: 'Dev', age: 19, address: 'Surendranagar' }
  ]




  //Examples of Nested ForLoop in Angular style
  usersNest = [
    { name: 'Arjun', age: 23, address: 'Parasnagar', socialMedia: ['Instagram', 'Whatsapp', 'Facebook', 'Linkedin'] },
    { name: 'Manthan', age: 22, address: 'Isanpur', socialMedia: ['Instagram', 'Whatsapp', 'Snapchat', 'Linkedin'] },
    { name: 'Meet', age: 21, address: 'Naroda', socialMedia: ['Facebook', 'Whatsapp', 'Instagram', 'Linkedin'] },
    { name: 'Jeel', age: 20, address: 'Vastral', socialMedia: ['Instagram', 'Whatsapp', 'Facebook', 'Linkedin'] },
    { name: 'Dev', age: 19, address: 'Surendranagar', socialMedia: ['Instagram', 'Whatsapp', 'Facebook', 'Whatsapp'] }
  ]


  //Example of style binding chnange property of tag dynamically
  colorbinding = 'white'
  bgcolorbinding = 'maroon'
  update(val: string) {

    if (val === 'update') {
      this.colorbinding = 'black', this.bgcolorbinding = 'red'
    } else {
      this.colorbinding = 'white',
        this.bgcolorbinding = 'maroon'
    }

  }


  //Form Example
  userData: any = {};
  getData(data: NgForm) {
    console.warn(data)
    this.userData = data;
  }

  //Example of toggle Element
  displayToggle = true;
  toggle() {
    this.displayToggle = !this.displayToggle;
  }


  //get Data from appcomponent which is send in html of app component
  @Input() item=0


  //Example of Two Way Binding
  // dataBinding:any;
}



  

