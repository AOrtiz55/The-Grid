import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IPoduct } from '../catalog/product.model';
import { Productservice } from '../productservice';
import { EventManager } from '@angular/platform-browser';
import { CATALOG_PRODUCTS } from '../catalog/product';
import { Cards } from '../cards/cards';
@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products: IPoduct[] = [];
  constructor(private productservice: Productservice) {
    this.products = this.productservice.getProd();
  }
  //we have prouduct declared in catalog
  @Input() product!: IPoduct;
  @Output() buy = new EventEmitter();
  getImageUrl(product: IPoduct) {
    if (!product) return '';
    return '/assets/images/robot-parts' + product.imageName;
  }
}
