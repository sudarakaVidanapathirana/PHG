import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ToastController  } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
  
/**
 * Generated class for the SchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
})
export class SchoolPage {


  orderForm: FormGroup;
  schoolRef:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toast:ToastController,
    public alertCtrl:AlertController,public alert:AlertController,public db:AngularFireDatabase,public formBuilder: FormBuilder) {
  
    this.schoolRef=db.list('/school_details');

    this.orderForm = this.formBuilder.group({
      "itemname":["",Validators.required]

    });
 
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolPage');
  }


  save(schoolName,schoolArea,date,grades,toppings){
    try{
    this.schoolRef.push({
      schoolName:schoolName,
      schoolArea:schoolArea,
      Last_Visit_Date:date,
      grades:grades,
      Checked_Grades:toppings
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
    message: 'Something went Wrong',
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

submit(){

  this.orderForm.reset();
}


}
