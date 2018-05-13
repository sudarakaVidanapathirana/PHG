import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentRptPage } from './student-rpt';

@NgModule({
  declarations: [
    StudentRptPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentRptPage),
  ],
})
export class StudentRptPageModule {}
