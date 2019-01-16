import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Product } from '../../app/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public product: Product = new Product();

  constructor(public navCtrl: NavController, private http: HttpClient, public toastCtrl: ToastController) {

  }

  AddProduct() {
    this.http.post("https://localhost:5001/api/Shop/AddProduct", this.product)
      .subscribe(data => {
        this.presentToast();
      });
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'เพิ่มรายการสำเร็จ!',
      duration: 3000,
    });
    toast.present();
  }

  isCheck(): boolean {
    return this.product.name == null || this.product.name == '' || this.product.price == null || this.product.price == 0
  }
}
