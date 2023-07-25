import { Component, OnInit } from "@angular/core";
import { Cart } from "../../models/Cart";
import { CartItem } from "../../models/CartItem";
import { CartService } from "../../services/cart/cart.service";
import { ProductService } from "../../services/product/product.service";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {}

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.productId);
  }

  changeQuanity(cartItem: CartItem, quanityInString: string) {
    const quantity = parseInt(quanityInString);
    this.cartService.changeQuanity(cartItem.product.productId, quantity);
  }
}
