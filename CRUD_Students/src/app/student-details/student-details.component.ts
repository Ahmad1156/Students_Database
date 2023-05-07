
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApicallerService } from '../services/apicaller.service';
import { AllStudents } from '../students/students.component';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student!:AllStudents;
  id!: Number;
  constructor(private route: ActivatedRoute, private StudentService: ApicallerService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.StudentService.getSingleStudent(this.id)
        .subscribe((students: AllStudents[]) => {
          students.forEach((student: AllStudents) => {
           this.student=student;
          });
        })
    })
  }

}
