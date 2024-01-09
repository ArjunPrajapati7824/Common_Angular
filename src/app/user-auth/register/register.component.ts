import { Component } from '@angular/core';
import {NgForm,FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title="Hello Register"
  today=Date()
  users=[
    {name:"Arjun",Address:"Parasnagar"},
    {name:"Manthan",Address:"Isanpur"}
    
  ]
  
  //Example of Template Form
  userData:any={};
  getData(data:any){
    console.log("Form data",data)
    this.userData=data;
  }



  //Example of Reactive Form
  registerform=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  registrationForm(){
    console.log(this.registerform.value)
  }

  get username(){
    return this.registerform.get('username')
  }

  get phone(){
    return this.registerform.get('phone')
  }

  // data:string="100";now if you add integer value then it will throw error

  // funDefine(name:number | string | boolean){//you can add multiple type of data like this except this error
    
  // }

  //   funCall(){
  //   this.funDefine(100);//Right way
  //   this.funDefine(true)//You can not pass a string because function have only number type value
  // }

  



}
