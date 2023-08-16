import { Component } from '@angular/core';
import { annotate } from 'rough-notation';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  ngOnInit(): void {
    let highLights = document.querySelector('#highlightElm') as HTMLElement;
    let annotation = annotate(highLights, {
      type: 'highlight',
      color: '#f9d423',
      multiline: true,
      animationDuration: 1000,
    });

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          annotation.show();
        } else {
          return;
        }
      });
    }, options);

    observer.observe(document.querySelector('#highlightElm') as HTMLElement);
  }
}
