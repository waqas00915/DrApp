import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  constructor(public navCtrl: NavController,private alertcontroller:AlertController) {

  }
 async Share(){
    const sharealert = await this.alertcontroller.create({
      header:"Share",
      buttons:[
        {text:"Facebook"},
        {text:"Tweeter"},
        {text:"WhatsApp"},
        {text:"BACK"}
      ],
    });
   await sharealert.present()

  }
  
}
