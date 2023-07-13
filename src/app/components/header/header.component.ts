import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navLinks') navLinks: any;
  @ViewChild('header') header: any;
  @ViewChild('toggleBtn') toggleBtn: any;
  hamburgerAnimation: boolean = false;
  scrollPosition: number = 0;

  ngAfterViewInit() {
    if (window.location.href.includes('imprint')) {
      this.header.nativeElement.classList.add('header-scrolled');
    }
  }

  toggleNavLinks() {
    this.navLinks.nativeElement.classList.toggle('show-nav-links');
    this.toggleBtn.nativeElement.classList.toggle('open');
    this.hamburgerAnimation = !this.hamburgerAnimation;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (this.scrollPosition > 72 && !window.location.href.includes('imprint')) {
      this.header.nativeElement.classList.add('header-scrolled');
    } else if (
      this.scrollPosition < 72 &&
      !window.location.href.includes('imprint')
    ) {
      this.header.nativeElement.classList.remove('header-scrolled');
    }
  }
}
