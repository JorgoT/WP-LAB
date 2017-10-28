import {Injectable, OnInit} from '@angular/core';
import {Student} from './model/student';

@Injectable()
export class StudentManagmentService {
  students: Student[] = [];
  student: Student;

  getStudents(): Student[] {
    for (let i = 0; i < 4; ++i) {
      if (i % 2 === 0) {
        this.student = new Student('Ime' + i, 'Prezime' + i, '131066' + i, 'KNI');
      } else {
        this.student = new Student('Ime' + i, 'Prezime' + i, '131066' + i, 'PET');
      }

      this.students.push(this.student);
    }
    return this.students;
  }

  /*students: Student[] = [
    {ime: 'Ime1', prezime: 'Prezime1', nasoka: 'KNI', indeks: '131066'},
    {ime: 'Ime2', prezime: 'Prezime2', nasoka: 'KNI', indeks: '131067'},
    {ime: 'Ime3', prezime: 'Prezime3', nasoka: 'KNI', indeks: '131068'},
    {ime: 'Ime4', prezime: 'Prezime4', nasoka: 'KNI', indeks: '131069'}
  ];*/
}
