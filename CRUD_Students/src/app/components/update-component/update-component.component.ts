import { Component, OnInit } from '@angular/core';
import { ApicallerService } from 'src/app/services/apicaller.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { AllStudents } from 'src/app/students/students.component';
import { Student } from '../add-student/add-student.component';
@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css'],
})
export class UpdateComponentComponent implements OnInit {
  student: Student = new Student();
  id!: Number;
  message: string = '';
  True!: boolean;
  constructor(
    private StudentService: ApicallerService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getStudentInfo();
  }

  getStudentInfo(): void {
    this.ActivatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

      this.StudentService.getSingleStudent(this.id).subscribe(
        (students: AllStudents[]) => {
          students.forEach((student: AllStudents) => {
            this.student.id = this.id;
            this.student.firstName = student.firstName;
            this.student.lastName = student.LastName;
            this.student.course = student.course;
            this.student.address = student.address;
          });
        }
      );
    });
  }
  updateStudent(): void {
    if (
      !this.student.firstName ||
      !this.student.lastName ||
      !this.student.course ||
      !this.student.address
    ) {
      this.True = true;
      this.message = 'Please enter full credentials';
      setTimeout(() => {
        this.message = '';
      }, 1000);
    } else {
      this.True = false;
      this.StudentService.updateStudent(this.student).subscribe({});
      this.message = 'Student Updated Successfully';
      setTimeout(() => {
        this.message = '';
        this.router.navigate(['/']);
      }, 2000);
    }
  }
}
