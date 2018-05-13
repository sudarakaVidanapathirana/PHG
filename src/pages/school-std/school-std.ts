import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SchoolStdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-school-std',
  templateUrl: 'school-std.html',
})
export class SchoolStdPage {

 
  schoolStdRef:FirebaseListObservable<any>;
  schoolOrderForm: FormGroup;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,public toast:ToastController,
     public alertCtrl:AlertController,public alert:AlertController,
     public db:AngularFireDatabase,public formBuilders: FormBuilder ) {

      this.schoolStdRef=db.list('/school_Student_details');

      this.schoolOrderForm = this.formBuilders.group({
        "elements":["",Validators.required]
  
      });
   
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolStdPage');
  }


  save(stName,date,stHeight,stweight,stSchool,grades,final_grades){
    try{
    this.schoolStdRef.push({
     StudentName:stName,
     BirthDate:date,
     StudentHeight:stHeight,
     StudentWeight:stweight,
     Grade:grades,
     Finaly_checked_Grade:final_grades,
    })  

    this.Alertsucessfull();
  }
  catch{
   this.AlertNotSucessful();
  }


}


Alertsucessfull(){
 
   let alertmsg = this.alert.create({
     title:'Sucessful',
     message: 'You Added sucessfully',
     buttons: ['ok']
   });
   alertmsg.present(alertmsg);
  }
AlertNotSucessful(){
  let alertmsg = this.alert.create({
    title:'Not Sucessful',
    message: 'Something Went Wrong ',
    buttons: ['ok']
  });
  alertmsg.present(alertmsg);
}

presentTost(){
  let toast = this.toast.create({
    message:'please fill all fields',
    duration: 5000
  });
  toast.present();
}

Submits(){
 
  this.schoolOrderForm.reset();
  
}


}
