import { Component, OnInit } from '@angular/core';
import { ApicallerService } from 'src/app/services/apicaller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();
  True: boolean = false;
  message: string = '';
  constructor(
    private StudentService: ApicallerService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  getBlood(blood: string) {
    this.student.blood = blood;
    console.log(this.student.blood);
  }
  AddStudent() {
    if (
      !this.student.firstName ||
      !this.student.lastName ||
      !this.student.course ||
      !this.student.address ||
      !this.student.blood
    ) {
      this.True = true;
      this.message = 'Please enter full credentials';
      setTimeout(() => {
        this.message = '';
      }, 1000);
    } else {
      this.True = false;
      this.StudentService.AddStudent(this.student).subscribe({});
      this.message = 'Student Added Successfully';
      setTimeout(() => {
        this.message = '';
        this.router.navigate(['/']);
      }, 2000);
    }
  }
}
export class Student {
  id?: Number;
  firstName: string = '';
  lastName: string = '';
  course: string = '';
  address: string = '';
  blood?: string = '';
}
