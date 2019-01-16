import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Rate } from '../../app/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public rate: Rate = new Rate();

  constructor(public navCtrl: NavController, private http: HttpClient, public toastCtrl: ToastController) {
    this.rate.rate = 0;
  }

  SetRate() {
    this.http.post("https://localhost:5001/api/Loan/SetRate", this.rate)
      .subscribe(data => {
        console.log(data);
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
