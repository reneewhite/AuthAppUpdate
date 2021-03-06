import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onSubmit(){
    firebase.auth().signOut().then(user => {
      this.navCtrl.push("LoginPage");
      // Sign-out successful.
      console.log("lol")
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
  }

}
