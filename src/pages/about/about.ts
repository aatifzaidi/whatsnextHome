import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }
  public event = {
    month: '1990-02-19',
    time: '07:43',
  }

  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }

}
