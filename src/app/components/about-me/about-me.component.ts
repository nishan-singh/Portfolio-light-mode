import { Component } from '@angular/core';
import { annotate } from 'rough-notation';
import { RoughAnnotationConfig } from 'rough-notation/lib/model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  ngOnInit(): void {
    this.underlineHeading();
  }

  underlineHeading() {
    let underlineHeading = annotate(
      document.querySelector('#about-me-hd-underline') as HTMLElement,
      this.underlineSetting('#75C2F6'),
    );
    underlineHeading.show();
  }

  underlineSetting(color: string) {
    return {
      type: 'underline',
      color: color,
      strokeWidth: 3,
    } as RoughAnnotationConfig;
  }
}
