import { Component, OnInit } from '@angular/core';
import { StudentslistService } from 'src/app/studentslist.service'; //Import service for add data in json
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  constructor(private AddStudent: StudentslistService) {} //Add Student For second Make constructor
  addStudent = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  ngOnInit(): void {}
  message: boolean = false;

  saveData() {
    // console.log(this.addStudent.value)
    this.AddStudent.saveStudentData(this.addStudent.value).subscribe((res) => {
      // console.log(res)
      this.message = true;
    });
  }
  removemsg() {
    this.message = false;
  }
  get std() {
    return this.addStudent.get('name');
  }
  get email() {
    return this.addStudent.get('email');
  }
}
