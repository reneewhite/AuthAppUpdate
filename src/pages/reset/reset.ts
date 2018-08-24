import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase
@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
email: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

  reset() {
    var auth = firebase.auth();
    var emailAddress = this.email;
 
    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
    }).catch(function (error) {
      // An error happened.
    });
  }

}
