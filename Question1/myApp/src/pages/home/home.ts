import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Loan } from '../../app/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public loan: Loan = new Loan();

  constructor(public navCtrl: NavController, private http: HttpClient, public toastCtrl: ToastController) {
    
  }

  SetRate() {
    this.http.post("https://localhost:5001/api/Loan/SetRate", this.loan)
      .subscribe(data => {
        this.presentToast();
      });
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'ยืนยันสำเร็จ!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
