import { Descript, Loan } from './../../app/models';
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
  public loan: Loan = new Loan;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    
  }

  ionViewDidEnter(){
    this.GetRate();
    this.Calculate();
  }

  Calculate() {
    this.http.get<Loan>("https://localhost:5001/api/Loan/AddDescripts/" + this.balance + "/" + this.years)
      .subscribe(data => {
        this.loan = data;
      });
  }

  GetRate() {
    this.http.get<number>("https://localhost:5001/api/Loan/GetRate")
      .subscribe(data => {
        this.loan.rate = data;
      });
  }
}
