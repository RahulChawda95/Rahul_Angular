import { Component } from '@angular/core';
import { StudentslistService } from 'src/app/studentslist.service';
import {FormGroup,FormControl } from '@angular/forms'
import { ActivatedRoute}from '@angular/router' //use For update data And Get Record Using URL
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  constructor(private AddStudent:StudentslistService ,private Router:ActivatedRoute){} //Add Student For second Make constructor 
  editStudent= new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')
  })
ngOnInit():void{
  // console.log(this.Router.snapshot.params)
  this.AddStudent.getStudentById(this.Router.snapshot.params['id']).subscribe((res:any)=>{
    console.log(res)
    this.editStudent= new FormGroup({
      name:new FormControl(res.name),
      email:new FormControl(res.email)
    })
  
  })
}
message:boolean=false;
UpdateData()
  {
    this.AddStudent.UpdateStudentData(this.Router.snapshot.params['id'],this.editStudent.value).subscribe((res)=>{
      console.log(res)
      this.message=true;
    })
    console.log(this.editStudent.value)
  }
  removemessage()
  {
    this.message=false;
  }
  
  
}
