import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../app/models';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public products: Product[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

  }

  ionViewDidLoad() {
    this.GetAllProduct();
  }

  GetAllProduct() {
    this.http.get<Product[]>("https://localhost:5001/api/Shop/GetAllProduct")
      .subscribe(data => {
        this.products = data;
      });
  }

  GoCartPage() {
    this.http.post("https://localhost:5001/api/Shop/AddProductInCart", this.products)
      .subscribe(data => {
        this.GetAllProduct();
        this.navCtrl.push("CartPage");
      });
  }

  isCheck(): boolean {
    return this.products.every(it => it.amount == 0);
  }
}
