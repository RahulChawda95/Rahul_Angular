import { Component } from '@angular/core';
import {StudentslistService} from '../../studentslist.service'


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  allstudentList:any;//Json Server to get Data And Save This Variable
  
  
  constructor(public studentList:StudentslistService){}
    
    ngOnInit():void
    {
      this.studentList.getAllStudentList().subscribe((res)=> 
      {
        console.log(res);
        this.allstudentList=res;
      })
      
    }

  
  DeleteStudent(student_id:any)
  {
    console.log(student_id)
    this.studentList.DeleteStudent(student_id).subscribe((res)=>{
      console.log(res)
      this.ngOnInit()
      
    })
  }
  
    
  }


