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
    })
  }

   search(){
//     // var studentrollnoFilter = this.studentrollnoFilter
//     // this.studentList= this.studentListwithoutFilter.filter(function (el:any){
//     //   return el.roll_no.toString().toLowerCase().include(
//     //     studentrollnoFilter.toString().trim().toLowerCase()
//     //   )
//     // })

    if(this.student_Name!==""){
          this.studentList = this.studentListwithoutFilter.filter((res: { student_name: string; }) =>{
                return res.student_name.toLowerCase().match(this.student_Name.toLowerCase())
              })

              this.Roll=""
    }else if(this.student_Name == ""){
      this.ngOnInit()
    }

// //     if(this.Roll!== undefined){
// //       this.studentList = this.studentListwithoutFilter.filter((res: { roll_no: number; }) =>{
// //             return res.roll_no.toString(this.Roll)
// //           })
// // }else if(this.student_Name == undefined){
// //   this.ngOnInit()
// // }
//     //  if(this.student_Name!==null){
//     //       this.studentList = this.studentListwithoutFilter.filter((res: { roll_no: number; }) =>{
//     //             return this.student_Name
//     //           })
//     // }else if(this.student_Name == null){
//     //   this.ngOnInit()
//     // }
 console.log(this.studentList)
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


  // search1(){
  //   if(this.Roll!== undefined){
  //            this.studentList = this.studentListwithoutFilter.filter((res: { roll_no: any; }) =>{
  //                  return res.roll_no.
  //            })
  //      }else if(this.student_Name == undefined){
  //        this.ngOnInit()
  //      }
  // }


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
