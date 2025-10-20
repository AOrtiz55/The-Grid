import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SiteHeader } from './site-header/site-header';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, FormsModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template: `<app-site-header></app-site-header>`,
})
export class App {
  constructor(router: Router) {
    // router.events.subscribe((e)=>console.log(e));
  }
}
