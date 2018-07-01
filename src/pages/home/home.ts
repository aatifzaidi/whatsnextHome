import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title:any;
  description;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}
