import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';//Required Import Module
import { ListStudentComponent } from './component/list-student/list-student.component';//Required
import { AddStudentComponent } from './component/add-student/add-student.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import {ReactiveFormsModule } from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component'

@NgModule({
  declarations: [ 
    AppComponent,
    ListStudentComponent,//Add Here
    AddStudentComponent,
    EditStudentComponent,
    HomePageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,//Import then
    ReactiveFormsModule,//import Forms
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
