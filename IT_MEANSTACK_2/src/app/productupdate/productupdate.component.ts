import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { NgClass } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-product-update',
  standalone: true,
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css'],
  imports: [NgClass, FormsModule] // Add FormsModule here
})
export class ProductupdateComponent {
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
  
  
  

  updateItem() {
    // Log the entire product to see its structure
    console.log('Product before update:', this.product , this.product.product._id);
  
    if (this.product && this.product.product._id) {
      console.log('Product ID before update:', this.product.product._id); // Log to debug
  
      const updatedProduct = {
        _id :this.product.product._id,
        title:this.product.product.title,
        description: this.product.product.description,
        price: this.product.product.price,
        category: this.product.product.category,
        image: this.product.product.image
      };
  
      this.productService.updateItem(this.product.product._id, updatedProduct).subscribe(
        (updatedData) => {
          console.log('Product updated:', updatedData);
          this.router.navigate(['home']);
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      console.error('Product ID is undefined, cannot update the product.');
    }
  }
  
  
}
