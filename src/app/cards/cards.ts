import { Component, Output, Input, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IPoduct } from '../catalog/product.model';
import { Cart } from '../cart';
@Component({
  selector: 'app-cards',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() product!: IPoduct;
  @Output() buy = new EventEmitter();

  constructor(private cart: Cart) {}

  ngOnChanges() {
    console.log('Cards input product', this.product);
  }
  getImageUrl(product: IPoduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
