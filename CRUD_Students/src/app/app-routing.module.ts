import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateComponentComponent } from './components/update-component/update-component.component';
const routes: Routes = [
  // { path: '', component: HomePageComponent },
  { path: '', component: StudentsComponent },
  { path: 'updateStudent/:id', component: UpdateComponentComponent },
  { path: 'AddStudent', component: AddStudentComponent },
  { path: 'studentDetails/:id', component: StudentDetailsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
