import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidatorPage } from './validator';

@NgModule({
  declarations: [
    ValidatorPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidatorPage),
  ],
})
export class ValidatorPageModule {}
