import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navLinks') navLinks: any;
  hamburgerAnimation: boolean = false;

  toggleNavLinks() {
    this.navLinks.nativeElement.classList.toggle('show-nav-links');
    this.hamburgerAnimation = !this.hamburgerAnimation;
  }
}
