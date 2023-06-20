import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navLinks') navLinks: any;

  toggleNavLinks() {
    this.navLinks.nativeElement.classList.toggle('show-nav-links');
  }
}
