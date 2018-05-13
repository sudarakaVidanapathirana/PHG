import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchoolRptPage } from '../school-rpt/school-rpt';
import firebase from 'firebase';
import { querystringDecode } from '@firebase/util';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any
  userlist:any
 
  constructor(public navCtrl: NavController) {
firebase.auth().onAuthStateChanged(user=>{
    if(user){
      this.user=user.uid;

      var query=firebase.database().ref('user').orderByChild('uid').equalTo(this.user);
      query.once('value',usersnapshot =>{

        this.userlist=[];
        usersnapshot.forEach(snapshot=>{

          this.userlist.push({
              fname:snapshot.val().fname,
              


          })
          return false;
        
        })
        
      })
    }





})

   
  }

  openItem(){
    this.navCtrl.push(SchoolRptPage);
  }

}
