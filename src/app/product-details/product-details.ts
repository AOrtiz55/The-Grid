import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IPoduct } from '../catalog/product.model';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Cart } from '../cart';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule, CurrencyPipe],
  standalone: true,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  @Input() product!: IPoduct;
  @Output() buy = new EventEmitter();
  constructor(private cart: Cart) {}

  getImageUrl(product: IPoduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
  getDiscount(product: IPoduct) {
    return { strikethrough: product.discount > 0 };
  }
  buyButtonClicked() {
    if (this.product) this.cart.add(this.product);
  }
}
