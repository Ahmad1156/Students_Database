import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateComponentComponent } from './components/update-component/update-component.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    StudentsComponent,
    StudentDetailsComponent,
    HomePageComponent,
    SearchComponent,
    AddStudentComponent,
    UpdateComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
