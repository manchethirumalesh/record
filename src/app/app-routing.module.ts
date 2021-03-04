import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { AppComponent } from './app.component';
import { DisplayRecordComponent } from './display-record/display-record.component';

const routes: Routes = [
  
  { path: 'addrecord', component: AddRecordComponent },
  { path: 'leaderboard', component: DisplayRecordComponent },

  { path: '',   redirectTo: '/', pathMatch: 'full' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
