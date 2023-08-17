import { Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import { EmployeedataService } from './services/employeedata.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'email',
    'gender',
    'language',
    'phoneNo',
    'salary',
    'dob',
    'age',
    'department',
    'action',
  ];
  // departments: string;

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private emplist: EmployeedataService,
    private coreService: CoreService
  ) {}
  ngOnInit(): void {
    //Must Be Requre for print data
    this.getList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  AddEditForm() {
    const dialogRef = this.dialog.open(AddEditComponent);

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getList();
        }
      },
    });
  }

  getList() {
    this.emplist.getEmployeeList().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        console.log(res);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  deleteEmployee(id: number) {
    if (window.confirm('Are You Sure')) {
      this.emplist.deleteEmployeeList(id).subscribe({
        next: (res) => {
          this.coreService.openSnackBar(
            'Employee Delete SUccessfull....!',
            'done'
          );
          this.getList();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  EditForm(data: any) {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getList();
        }
      },
    });
  }
}
