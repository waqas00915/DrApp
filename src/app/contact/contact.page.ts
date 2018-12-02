import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  items:any =[1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit() {
  }
  
}
