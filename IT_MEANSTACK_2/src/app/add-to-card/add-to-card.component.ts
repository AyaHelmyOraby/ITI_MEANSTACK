import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { CartService } from '../CartService/cart.service'; // Import the CartService

@Component({
  selector: 'app-product-update',
  standalone: true,
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCardComponent {
  product: any = {
    _id: '',
    title: '',
    description: '',
    price: 0,
    category: '',
    image: ''
  };

  constructor(
    private productService: ProductService,
    private cartService: CartService, // Inject the CartService
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.loadProduct(productId);
    });
  }

  loadProduct(id: string): void {
    this.productService.getProductById(id).subscribe(
      (response) => {
        if (response.status === "success" && response.data) {
          this.product = response.data;
        } else {
          console.error('Unexpected response structure:', response);
        }
      },
      (error) => {
        console.error('Error loading product:', error);
      }
    );
  }

  addToCart(): void {
    this.cartService.addToCart(this.product); // Add product to cart
  }
}
