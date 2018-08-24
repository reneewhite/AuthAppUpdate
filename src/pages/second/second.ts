import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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



  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.personForm = this.fb.group({
      name:['',[Validators.required]],
      surname:['',[Validators.required]],
      gender:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]]
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

}
