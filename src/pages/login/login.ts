import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from './../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      username:['',[Validators]],
      password:['',[Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  deSubmit(){
  
      firebase.auth().signInWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password).then(user => {
        this.navCtrl.push("HomePage");
      });
   
    }

    signUp(){
      this.navCtrl.push("SecondPage");
    }

    signUpGmail(){
      this.navCtrl.push("AccountPage");
    }

    desSubmit(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(user => {
        this.navCtrl.push("HomePage");
      });
   
    
    }

    reset(){
      this.navCtrl.push("ResetPage");
    }
}
