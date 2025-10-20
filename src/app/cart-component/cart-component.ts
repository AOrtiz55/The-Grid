import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { IPoduct } from '../catalog/product.model';
import { Cart } from '../cart';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-component',
  imports: [CommonModule, CurrencyPipe],
  standalone: true,
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent {
  cart$: Observable<IPoduct[]>;

  constructor(private cart: Cart) {
    this.cart$ = this.cart.items$;
  }

  ngOnInit() {}
  @Input() product!: IPoduct;
  @Output() buy = new EventEmitter();

  cartItems(items: IPoduct[] | null): number {
    if (!items || items.length === 0) return 0;
    return items.reduce((prev: number, next) => {
      const discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }
  totalFrom(items: IPoduct[] | null): number {
    if (!items || items.length === 0) return 0;
    return items.reduce((sum, p) => {
      const discount = p.discount ?? 0;
      return sum + p.price * (1 - discount);
    }, 0);
  }
  removeFromCart(product: IPoduct) {
    this.cart.remove(product);
  }
  getImageUrl(product: IPoduct) {
    if (!product) return '';
    return 'assets/images/robot-parts/' + product.imageName;
  }
}
