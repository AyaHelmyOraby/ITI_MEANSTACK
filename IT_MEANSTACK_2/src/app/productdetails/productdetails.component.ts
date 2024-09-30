import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { NgClass } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-product-update',
  standalone: true,
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
  imports: [NgClass, FormsModule] // Add FormsModule here
})
export class ProductdetailsComponent {
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
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      const productId = params['id'];  // Make sure productId is valid
      this.loadProduct(productId);
    });
    
  }

  loadProduct(id: string): void {
    this.productService.getProductById(id).subscribe(
      (response) => {
        console.log('Fetched product:', response); // Log the response
        if (response.status === "success" && response.data) {
          this.product = response.data; // Assign the nested data to product
          console.log('Product loaded:', this.product); // Now it should have the _id
        } else {
          console.error('Unexpected response structure:', response);
        }
      },
      (error) => {
        console.error('Error loading product:', error);
      }
    );
  }
  
  
  

 
  
  
}
