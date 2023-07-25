import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Product from "../../models/product";
import { CartService } from "../../services/cart/cart.service";
import { ProductService } from "../../services/product/product.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent implements OnInit {
  product!: Product;

  constructor(
    activatedRoute: ActivatedRoute,
    productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params["id"])
        this.product = productService.getProductById(params["id"]);
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl("/cart-page");
  }
}
