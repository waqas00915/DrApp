import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  items:any =[1,2,3,4,5];
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  pageback(){
    this.navCtrl.navigateBack('/')
  }
}
