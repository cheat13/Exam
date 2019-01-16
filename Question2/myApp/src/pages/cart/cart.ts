import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart } from '../../app/models';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public cart: Cart = new Cart();

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.cart.products = [];
  }

  ionViewDidLoad() {
    this.GetCart();
  }

  GetCart() {
    this.http.get<Cart>("https://localhost:5001/api/Shop/GetCart")
      .subscribe(data => {
        this.cart = data;
        console.log(this.cart);

      });
  }

  GoBack() {
    this.navCtrl.pop();
  }
}
