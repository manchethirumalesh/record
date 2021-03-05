import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.css']
})
export class DisplayRecordComponent implements OnInit {

  studentList:any=[]
  studentrollnoFilter:Number | undefined
  studentListwithoutFilter:any = []

  total_Records : number | undefined

  student_Name:string=""
  Roll: any;

  constructor( private service : SharedService ) { }

  ngOnInit(): void {
    this.refreshstudent();
  } 

  refreshstudent(){
    this.service.getstudentlist().subscribe((data)=>{
      this.studentList=data;
      this.studentListwithoutFilter=data
      this.total_Records = this.studentList.length
    })
  }

  search(){
    if(this.student_Name!==""){
          this.studentList = this.studentListwithoutFilter.filter((res: { student_name: string; }) =>{
          return res.student_name.toLowerCase().match(this.student_Name.toLowerCase())
        })
        this.Roll=""
    }else if(this.student_Name == ""){
      this.ngOnInit()
    }
      console.log(this.studentList.length)
  }

  ser(){
    if(this.Roll!== null){
       this.studentList = this.studentListwithoutFilter.filter((res: { roll_no: number; }) =>
        res.roll_no == this.Roll);
        this.student_Name =""
    }else if(this.Roll == null){
      this.ngOnInit()
    }
    console.log(this.studentList)   
  }

  cancel(){
    this.Roll=""
    this.student_Name =""
    this.ngOnInit()
  }

  sorts(prop: any,asc: any){
    this.studentList = this.studentListwithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
        return(a[prop]>b[prop])?1 : ((a[prop]<b[prop])? -1 :0);
      }else{
        return(b[prop]>a[prop])?1 : ((b[prop]<a[prop])? -1 :0);
      }
    })
  }

}
