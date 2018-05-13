import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
/**
 * Generated class for the SchoolRptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school-rpt',
  templateUrl: 'school-rpt.html',
})
export class SchoolRptPage {

  schoolRptRef:any;
  schools:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase,private actionSheetCtrl:ActionSheetController) {

      this.schoolRptRef = db.list('/school_details');
      this.schoolRptRef.subscribe(resp =>{
          this.schools=resp;
      
        
      })
  }

  select(school){
    this.actionSheetCtrl.create({
      buttons:[
        {text:'Delete',
        role:'destructive',
        handler:() =>{
          this.schoolRptRef.remove(school.$key)
        }
      }
      ]
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolRptPage');
  }

}
