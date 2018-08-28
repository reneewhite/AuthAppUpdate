import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomePage } from './../home/home';
import { File } from '@ionic-native/file';
// import firebase from 'firebase';
declare var firebase


 

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'second.html',
})
export class SecondPage {
  personForm: FormGroup;
  human={
    name:"",
    surname:"",
    gender:"",
  username:"",
password: ""
}
PasswordValidator

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.personForm = this.fb.group({
      name:  new FormControl('',Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      surname:  new FormControl('',Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      gender: new FormControl('',Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      username:  new FormControl('',Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.required
      ])),
      password: new FormControl('',Validators.compose([
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
    console.log('ionViewDidLoad SecondPage');
  }

  onSubmit(){
    firebase.auth().createUserWithEmailAndPassword(this.personForm.value.username, this.personForm.value.password).then(user => {
      this.navCtrl.push("HomePage");
    });
  }

  onLog(){
    this.navCtrl.push("LoginPage");
  }


  validation_messages = {
    'name': [
        { type: 'required', message: 'Name is required.' },
      ],
      'surname': [
        { type: 'required', message: 'Surname is required.' }
      ],
      'gender': [
        { type: 'required', message: 'Gender is required.' }
      ],
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
