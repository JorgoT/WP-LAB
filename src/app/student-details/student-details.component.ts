import {Component, Input} from '@angular/core';
import {Student} from '../model/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})

export class StudentDetailsComponent {
  @Input() student: Student;

  constructor() {
  }
}
