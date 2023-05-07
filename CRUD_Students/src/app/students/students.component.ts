import { Component, OnInit } from '@angular/core';
import { ApicallerService } from '../services/apicaller.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  Students: AllStudents[] = [];
  searchText: string = '';
  update!: boolean;
  subscription!: Subscription;

  constructor(private StudentService: ApicallerService) {
    this.subscription = this.StudentService.onToggle().subscribe(
      (value) => (this.update = value));

  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  displayStudent(searchValue: string): void {
    this.searchText = searchValue;
  }
  deleteStudent(student: AllStudents) {
    this.StudentService.deleteStudent(student).subscribe();
    location.reload();
  }
  getAllStudents(): void {
    this.StudentService.getAllStudents()
      .subscribe((data: AllStudents[]) => {
        this.Students = data;
      })
  }
}

export interface AllStudents {
  ID: Number;
  firstName: string;
  LastName: string;
  course: string;
  address: string;
  BLOOD_TYPE:string;
}
