import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cart } from '../cart';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  constructor(public cartVariable: Cart) {}
}
