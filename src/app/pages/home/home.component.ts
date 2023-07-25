import { Component, OnInit, Input } from "@angular/core";
import Product from "../../models/product";
import { ProductService } from "../../services/product/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  products: Array<Product> = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["searchTerm"])
        this.products = this.productService.getAllProductsBySearchTerm(
          params["searchTerm"]
        );
      else if (params["desiredTag"])
        this.products = this.productService.getAllProductsByTag(
          params["desiredTag"]
        );
      else this.products = this.productService.getAllProducts();
    });
  }
}
