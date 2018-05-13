import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';  
import {AngularFireDatabase,FirebaseListObservable}from 'angularfire2/database-deprecated';
import firebase from 'firebase';
import { Register2Page } from '../register2/register2';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
   
  signupData ={
    fname:'',
    lname:'',
    phiID:'',
    nic:'',
    date:'',
    password:'',
    passwordRetype:''
  };
  userid:any
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     public afAuth:AngularFireAuth) {
  
    this.signupData.fname="";
    this.signupData.lname="";
    this.signupData.phiID="";
    this.signupData.nic="";
    this.signupData.date="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  signup(){
    
    if (this.signupData.password !==this.signupData.passwordRetype){

      let alert =this.alertCtrl.create({
        title:'Error',
        message:'Password and Re-enterd password does not match',
        buttons:['OK']
      });
      alert.present();
      return;
    }
    this.userid=firebase.auth().currentUser.uid;
    this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.phiID+'@domain.xta',this.signupData.password)

    

    .then(newUser=>{

      firebase.database().ref('/user').child(newUser.uid)
      
    .set({
      fname:this.signupData.fname,
      lname:this.signupData.lname,
      phiID:this.signupData.phiID,
      nic:this.signupData.nic,
      date:this.signupData.date,
      password:this.signupData.password,
      uid:this.userid

    });  
    })
    .then(auth=>{
      console.log(auth);
      
    })
    .catch(err=>{

      let alert =this.alertCtrl.create({
        title:'Error',
        message:err.message,
        buttons:['OK']
      });
      alert.present();
    });

    this.navCtrl.push(Register2Page);
  }

  


}
