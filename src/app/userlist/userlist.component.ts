import { Component ,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  list:any[]=[]
  addTask(item:any){

    if(item==''){
      alert("Add Some Task")
    }else{
    this.list.push({id:this.list.length+1,name:item})
    console.warn(this.list)
    }
  }

  deleteTask(itemId:any){
    this.list=this.list.filter(item=>item.id!==itemId)
  }


  //data send from child user list to parent app-component
  @Output() updateDataEvent =new EventEmitter<string>();

  @Input() datachild=''

}
