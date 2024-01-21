import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navLinks') navLinks?: ElementRef<HTMLAnchorElement>;
  @ViewChild('header') header?: ElementRef<HTMLElement>;
  @ViewChild('toggleBtn') toggleBtn?: ElementRef<HTMLButtonElement>;
  hamburgerAnimation = false;
  colorChange = true;
  scrollPosition = 0;
  language = 'de';

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.header) {
        if (window.location.href.includes('imprint')) {
          this.header.nativeElement.classList.add('header-scrolled');
        } else if (
          this.scrollPosition < 72 &&
          !window.location.href.includes('imprint')
        ) {
          this.header.nativeElement.classList.remove('header-scrolled');
        }
      }
    });
  }

  toggleNavLinks() {
    if (this.navLinks) {
      this.navLinks.nativeElement.classList.toggle('show-nav-links');
    }
    if (this.toggleBtn) {
      this.toggleBtn.nativeElement.classList.toggle('open');
    }
    this.hamburgerAnimation = !this.hamburgerAnimation;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.changeNavColor();
  }

  changeNavColor() {
    if (
      this.scrollPosition > 72 &&
      !window.location.href.includes('imprint') &&
      this.header
    ) {
      this.header.nativeElement.classList.add('header-scrolled');
    } else if (
      this.scrollPosition < 72 &&
      !window.location.href.includes('imprint') &&
      this.header
    ) {
      this.header.nativeElement.classList.remove('header-scrolled');
    }
  }

  toggleLanguage(lang: string) {
    this.translate.use(lang);
    this.language = lang;
  }
}
