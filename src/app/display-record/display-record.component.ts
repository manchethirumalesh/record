import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.css']
})
export class DisplayRecordComponent implements OnInit {

  studentList:any=[]
  studentrollnoFilter:string = ""
  studentListwithoutFilter:any = []

  constructor( private service : SharedService ) { }

  ngOnInit(): void {
    this.refreshstudent();
  } 

  refreshstudent(){
    let rank
    this.service.getstudentlist().subscribe((data)=>{
      this.studentList=data;
      this.studentListwithoutFilter=data
    })
  }

  filterfn(){
    // var studentrollnoFilter = this.studentrollnoFilter
    // this.studentList= this.studentListwithoutFilter.filter(function (el:any){
    //   return el.studentList.roll_no.toString().toLowerCase().include(
    //     studentrollnoFilter.toString().trim().toLowerCase()
    //   )
    // })
    console.log(this.studentListwithoutFilter)
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
