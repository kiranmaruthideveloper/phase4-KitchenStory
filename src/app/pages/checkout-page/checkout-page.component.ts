import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Cart } from "../../models/Cart";
import { Order } from "../../models/Order";
import { CartService } from "../../services/cart/cart.service";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout-page.component.html",
  styleUrls: ["./checkout-page.component.css"],
})
export class CheckoutPageComponent implements OnInit {
  order: Order = new Order();

  constructor(cartService: CartService) {
    const cart = cartService.getCart();

    this.order.items = cart.items;
    this.order.totalQuantity = cart.totalCount;

    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {}
}
