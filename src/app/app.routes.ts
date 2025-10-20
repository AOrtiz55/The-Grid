import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SiteHeader } from './site-header/site-header';
import { Catalog } from './catalog/catalog';
import { CartComponent } from './cart-component/cart-component';
import { SignInComponent } from './user/sign-in/sign-in.component';
export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'cart-component', component: CartComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', redirectTo: 'home' },
];
