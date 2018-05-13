import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {FamilyPage} from '../family/family';
import { PregnantPage } from '../pregnant/pregnant';
import { BornNewPage } from '../born-new/born-new';
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'familyHome.html'
})
export class familyHome {


  currentuser:any
  sliceuser:any

  constructor(public navCtrl: NavController,public modalCtrl:ModalController ) {


    this.currentuser = firebase.auth().currentUser.email;
    this.sliceuser = this.currentuser.slice(0,-11);
    console.log("current user :"+this.sliceuser);
  }

onButtonclicked(){
 this.navCtrl.push(FamilyPage);
}

onButtonclicked1(){
  this.navCtrl.push(PregnantPage);
 }

 onButton(){
  this.navCtrl.push(BornNewPage);
 }

}
