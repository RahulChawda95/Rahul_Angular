import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './component/add-student/add-student.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { ListStudentComponent } from './component/list-student/list-student.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'add',component:AddStudentComponent},
  {path:'edit/:id',component:EditStudentComponent},
  {path:'list',component:ListStudentComponent},
  {path:'home',component:HomePageComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


