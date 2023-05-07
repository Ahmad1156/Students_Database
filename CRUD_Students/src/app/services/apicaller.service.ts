import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllStudents } from '../students/students.component';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Student } from '../components/add-student/add-student.component';
import { Subject } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class ApicallerService {
  update: boolean = false;
  private subject = new Subject<any>();
  private Apiurl = "http://localhost:5000/api/v1/Students";
  constructor(private apiCaller: HttpClient) { }

  getAllStudents(): Observable<AllStudents[]> {
    return this.apiCaller.get<AllStudents[]>(this.Apiurl)
  }
  getSingleStudent(id: Number): Observable<AllStudents[]> {
    const url = `${this.Apiurl}/${id}`
    return this.apiCaller.get<AllStudents[]>(url)
  }
  AddStudent(student: Student): Observable<Student> {
    return this.apiCaller.post<Student>(this.Apiurl, student, httpOptions)
  }
  updateStudent(student: Student): Observable<AllStudents> {
    const url = `${this.Apiurl}/${student.id}`
    return this.apiCaller.put<AllStudents>(url, student, httpOptions)
  }
  deleteStudent(student: AllStudents): Observable<AllStudents> {
    const url = `${this.Apiurl}/${student.ID}`;
    return this.apiCaller.delete<AllStudents>(url)
  }
  toggleupdateStudent(): void {
    this.update = !this.update;
    this.subject.next(this.update);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}



