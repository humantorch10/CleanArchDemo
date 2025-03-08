import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: false,
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  // Fields for creating a product
  newProductName: string = '';
  newProductPrice: number = 0;

  // Fields for editing a product
  editMode: boolean = false;
  editProductId: string = '';
  editProductName: string = '';
  editProductPrice: number = 0;

  constructor(private productService: ProductService) {
    console.log("reached here");
    
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error(err),
    });
  }

  // CREATE
  createProduct(): void {
    if (!this.newProductName || !this.newProductPrice) return;

    const newProduct = {
      name: this.newProductName,
      price: this.newProductPrice,
    };

    this.productService.create(newProduct).subscribe({
      next: (created) => {
        this.products.push(created);
        this.newProductName = '';
        this.newProductPrice = 0;
      },
      error: (err) => console.error(err),
    });
  }

  // Enable edit mode
  startEdit(product: Product): void {
    this.editMode = true;
    this.editProductId = product.id;
    this.editProductName = product.name;
    this.editProductPrice = product.price;
  }

  // UPDATE
  saveEdit(): void {
    if (!this.editProductId) return;

    const updated: Product = {
      id: this.editProductId,
      name: this.editProductName,
      price: this.editProductPrice,
    };

    this.productService.update(updated).subscribe({
      next: () => {
        // Update in local array
        const index = this.products.findIndex((p) => p.id === updated.id);
        if (index >= 0) {
          this.products[index] = updated;
        }
        this.cancelEdit();
      },
      error: (err) => console.error(err),
    });
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editProductId = '';
    this.editProductName = '';
    this.editProductPrice = 0;
  }

  // DELETE
  deleteProduct(id: string): void {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    this.productService.delete(id).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== id);
      },
      error: (err) => console.error(err),
    });
  }
}
