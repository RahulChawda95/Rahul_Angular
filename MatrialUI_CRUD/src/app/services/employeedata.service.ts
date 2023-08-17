import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeedataService {
  constructor(private http: HttpClient) {}
  submitForm(data: any) {
    return this.http.post('http://localhost:3000/employee', data);
  }

  updateForm(id: number, data: any) {
    return this.http.put(`http://localhost:3000/employee/${id}`, data);
  }

  getEmployeeList() {
    return this.http.get('http://localhost:3000/employee');
  }
  deleteEmployeeList(id: number) {
    return this.http.delete(`http://localhost:3000/employee/${id}`);
  }

  getDepartmentList() {
    return this.http.get('http://localhost:3000/departments');
  }

  getlanguageList() {
    return this.http.get('http://localhost:3000/language');
  }
}
