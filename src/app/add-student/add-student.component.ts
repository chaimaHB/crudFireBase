import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public student = new Student();
  constructor( private studentService: StudentService) { }

  ngOnInit() : void{
  }
  save() {
    console.log(this.student);
    this.studentService.AddStudent({ ...this.student })
    }
    

}
