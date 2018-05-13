import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SchoolHealthPage } from '../pages/school-health/school-health';
import { SchoolPage } from '../pages/school/school';
import { ImmunizePage } from '../pages/immunize/immunize';
import { SchoolStdPage} from '../pages/school-std/school-std';
import { SchoolRptPage} from '../pages/school-rpt/school-rpt';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import {BornNewPage} from '../pages/born-new/born-new';
import {FamilyPage} from '../pages/family/family';
import {PregnantPage} from '../pages/pregnant/pregnant';
import {familyHome} from '../pages/familyHome/familyHome';
import {ProfilePage} from '../pages/profile/profile';
import { Register2Page } from '../pages/register2/register2';

import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { UserProvider } from '../providers/user/user';





const firebasePHG = {
  apiKey: "AIzaSyAdDXOSSHI8kijuEVEj3svuuRNrpio1Ueo",
  authDomain: "public2640.firebaseapp.com",
  databaseURL: "https://public2640.firebaseio.com",
  projectId: "public2640",
  storageBucket: "public2640.appspot.com",
  messagingSenderId: "615568767405"
};

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    Register2Page,
    WelcomePage,
    HomePage,
    AboutPage,
    ContactPage,
    SchoolHealthPage,
    SchoolPage,
    ImmunizePage,
    SchoolStdPage,
    SchoolRptPage,
    ForgotPasswordPage,
    BornNewPage,
    FamilyPage,
    PregnantPage,
    familyHome,
    ProfilePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebasePHG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    Register2Page,
    WelcomePage,
    HomePage,
    AboutPage,
    ContactPage,
    SchoolHealthPage,
    SchoolPage,
    ImmunizePage,
    SchoolStdPage,
    SchoolRptPage,
    ForgotPasswordPage,
    BornNewPage,
    FamilyPage,
    PregnantPage,
    familyHome,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
