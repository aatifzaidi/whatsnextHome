import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AboutPage} from '../about/about';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  public items = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){
 
    // this.items = [
    //   {title: 'hi1', description: 'test1'},
    //   {title: 'hi2', description: 'test2'},
    //   {title: 'hi3', description: 'test3'}
    // ];
 
  }
 
  addItem(){
    let addModal = this.modalCtrl.create(AboutPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
  }
 
  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){
    this.navCtrl.push(HomePage, {
      item: item
    });
  }

}
