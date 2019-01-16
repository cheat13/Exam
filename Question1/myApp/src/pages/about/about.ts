import { Descript } from './../../app/models';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public balance: number;
  public years: number;
  public descripts: Descript[];

  constructor(public navCtrl: NavController, private http: HttpClient) {
    
  }

  Calculate() {
    this.http.get<Descript[]>("https://localhost:5001/api/Loan/AddDescripts/" + this.balance + "/" + this.years)
      .subscribe(data => {
        this.descripts = data;
      });
  }


}
