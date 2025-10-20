import { Injectable } from '@angular/core';
import { IPoduct } from './catalog/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CATALOG_PRODUCTS } from './catalog/product';
@Injectable({
  providedIn: 'root',
})
export class Productservice {
  private productSub = new BehaviorSubject<IPoduct[]>(CATALOG_PRODUCTS);
  readonly products$ = this.productSub.asObservable();

  setProd(items: IPoduct[]) {
    this.productSub.next(items);
  }
  getProd(): IPoduct[] {
    return this.productSub.value.slice();
  }
}
