import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomePage } from './../home/home';
import { File } from '@ionic-native/file';
import { ValidatorPage } from './../validator/validator';
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
  terms;
  
  PasswordValidator

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder) {
    this.loginForm = this.fb.group({
     
      username: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
     ])),
     confirm_password: new FormControl('', Validators.required)
}, (formGroup: FormGroup) => {
	 return this.PasswordValidator.areEqual(formGroup);
     
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


    validation_messages = {
      'username': [
          { type: 'required', message: 'Username is required.' },
          { type: 'minlength', message: 'Username must be at least 5 characters long.' },
          { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
          { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
          { type: 'validUsername', message: 'Your username has already been taken.' }
        ],
        'password': [
          { type: 'required', message: 'Password is required.' }
        ],
      }
}
