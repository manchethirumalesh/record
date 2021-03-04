import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  add!: FormGroup;
  marks: any
  per:any
  app: any 

  constructor( private service : SharedService ) { }

  ngOnInit(): void {

    this.add = new FormGroup({
      'roll' : new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ]),
      'name' : new FormControl('',[
        Validators.required
      ]),
      'maths' : new FormControl('',[
        Validators.max(100),
        Validators.min(0),
        Validators.required
      ]),
      'physics' : new FormControl('',[
        Validators.max(100),
        Validators.min(0),
        Validators.required
      ]),
      'chemistry' : new FormControl('',[
        Validators.max(100),
        Validators.min(0),
        Validators.required
      ]),
    })
  }

  addrecord(){
    let total_marks 
    let percentage

    total_marks = this.add.get('maths')?.value + this.add.get('physics')?.value + this.add.get('chemistry')?.value
    percentage = (total_marks/300)*100
    this.per=percentage
    this.marks=total_marks
    let val = {
      roll_no :this.add.get('roll')?.value,
      student_name :  this.add.get('name')?.value,
      maths_marks : this.add.get('maths')?.value,
      physics_marks : this.add.get('physics')?.value,
      chemistry_marks : this.add.get('chemistry')?.value,
      total_Marks : this.marks,
      percentage : this.per
    }
    this.service.addstudent(val).subscribe()
    console.log("added")
    console.log(val)
  }

  reset(fvalue : FormGroup ){
    fvalue.reset();
    this.marks=''
    this.per=''
  }

}
