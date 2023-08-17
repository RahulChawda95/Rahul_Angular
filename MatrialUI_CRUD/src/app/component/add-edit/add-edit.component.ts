import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { EmployeedataService } from 'src/app/services/employeedata.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  AddEditForm = new FormGroup({
    sal: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phoneNo: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
    department: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });
  department: any;
  Language: any;
  constructor(
    private formBuild: FormBuilder,
    private empForm: EmployeedataService,
    private emplist: EmployeedataService,

    private dilogbox: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService: CoreService
  ) {
    this.emplist.getDepartmentList().subscribe((data) => {
      this.department = data;
      console.log(data);
    });
    this.emplist.getlanguageList().subscribe((res) => {
      this.Language = res;
    });
  }
  ngOnInit(): void {
    this.AddEditForm.patchValue(this.data);
    this.department;
    this.Language;
  }

  message: boolean = false;
  submitForm() {
    if (this.AddEditForm.valid) {
      if (this.data) {
        this.empForm
          .updateForm(this.data.id, this.AddEditForm.value)
          .subscribe({
            next: (val: any) => {
              this.coreService.openSnackBar(
                'Employee Data Updated......!',
                'done'
              );
              this.dilogbox.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.empForm.submitForm(this.AddEditForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar(
              'Employee Added SuccessFully',
              'done'
            );
            this.dilogbox.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

  get name1() {
    return this.AddEditForm.get('firstname');
  }
  get lname() {
    return this.AddEditForm.get('lastname');
  }
  get email() {
    return this.AddEditForm.get('email');
  }
  get phone() {
    return this.AddEditForm.get('phoneNo');
  }
  get gender() {
    return this.AddEditForm.get('gender');
  }
  get dob() {
    return this.AddEditForm.get('dob');
  }
  get Department() {
    return this.AddEditForm.get('department');
  }
  get language() {
    return this.AddEditForm.get('language');
  }
  get salary() {
    return this.AddEditForm.get('salary');
  }
  get sal() {
    return this.AddEditForm.get('sal');
  }
  get age() {
    return this.AddEditForm.get('age');
  }
}
