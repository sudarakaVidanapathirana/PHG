import { Component, ViewChild } from '@angular/core';
import {App, Nav, Platform, MenuController, Icon  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';

import { SchoolHealthPage } from '../pages/school-health/school-health';
import { AboutPage } from '../pages/about/about';
import { ContactPage} from '../pages/contact/contact';

import {AngularFireAuth} from 'angularfire2/auth'
import { HomePage } from '../pages/home/home';
import { familyHome } from '../pages/familyHome/familyHome';
import {ProfilePage} from '../pages/profile/profile';
import { Img } from 'ionic-angular/components/img/img-interface';
//import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'     
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  username: string;
  rootPage: any;
  currentuser:any
  sliceuser:any
   pages=[];    
  // pages: Array<{ title: string, component: any}>;

  constructor(public platform: Platform,public menuCtrl: MenuController,
    public app: App,
     public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public afAuth:AngularFireAuth) {
    //this.initializeApp();

    this.afAuth.authState.subscribe(auth=>{
      if(!auth)
      this.rootPage=WelcomePage;
      else
      this.rootPage=HomePage;
    });

    // used for an example of ngFor and navigation
   
    //this.currentuser = firebase.auth().currentUser.uid;
    //this.sliceuser = this.currentuser.slice(0,-11);
    //console.log("current user :"+this.sliceuser);
    this.pages = [
     
     // { title: 'List', component: ListPage }, 
  
      {
        'title': 'Profile',
        'icon': 'sass',
         component:ProfilePage,
        'color': '#CE6296'
      },
      
      {
        'title': 'School Health',
        'icon': 'markdown',
        component:SchoolHealthPage,
        'color': '#E63135'
      },        

      {
        'title': 'Family Health',
        'icon': 'tux',
         component:familyHome,
        'color': '#F46529'
      },        

      {
        'title': 'Epidemiology',
        'icon': 'python',
         component:ProfilePage,
         'color': '#3575AC'
      },        

      {
        'title': 'Environment Health',
        'icon': 'tux',
         component:ProfilePage,
         'color': '#412159'
      },   
      
      {
        'title': 'Food & Safety Hygine',
        'icon': 'javascript',
         component:ProfilePage,
         'color': '#FFD439'
      },        

      {
        'title': 'About',
        'icon': 'angular',
         component:AboutPage,
        'color': '#E63135'
      },        

      {
        'title': 'Contact Us',
        'icon': 'html5',
         component:ContactPage,
        'color': '#25D366'
      },        

    ];

     

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
  logOut(){
    console.log("Logout");
    //this.authService.logout();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(WelcomePage);
  }
}
