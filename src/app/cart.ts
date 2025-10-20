import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPoduct } from './catalog/product.model';
@Injectable({
  providedIn: 'root',
})
export class Cart {
  constructor() {}

  private cart: BehaviorSubject<IPoduct[]> = new BehaviorSubject<IPoduct[]>([]);
  readonly items$ = this.cart.asObservable();
  readonly count$ = this.items$.pipe(map((items) => items.length));

  add(product: IPoduct) {
    const current = this.cart.value.slice();
    current.push(product);
    this.cart.next(current);
  }
  getCart(): Observable<IPoduct[]> {
    return this.cart.asObservable();
  }
  remove(product: IPoduct) {
    let newCart = this.cart.getValue().filter((i) => i !== product);
    this.cart.next(newCart);
  }
}
