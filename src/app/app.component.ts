import {Component, OnInit} from '@angular/core';
import {StudentManagmentService} from './student-managment.service';
import {Student} from './model/student';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {ArrayType} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  students: Student[];
  selectedStudent: Student;

  constructor(private service: StudentManagmentService) {
    this.students = this.service.getStudents();
  }

  selectStudent(student: Student) {
    this.selectedStudent = student;
  }
}
