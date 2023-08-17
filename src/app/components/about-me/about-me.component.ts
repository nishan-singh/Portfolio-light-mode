import { Component } from '@angular/core';
import { annotate, annotationGroup } from 'rough-notation';
import { RoughAnnotationConfig } from 'rough-notation/lib/model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  textAnnotation: any;
  headingAnnotation: any;

  ngOnInit(): void {
    this.markText();
    this.underlineHeading();
  }

  markText() {
    let markElem1 = this.markElms('#highlight1', '#A8DF8E');
    let markElem2 = this.markElms('#highlight2', '#f9d423');
    let markElem3 = this.markElms('#highlight3', '#BEADFA');
    let markElem4 = this.markElms('#highlight4', '#8BE8E5');
    let markElem5 = this.markElms('#highlight5', '#FEA1A1');
    let markElem6 = this.markElms('#highlight6', '#FE7BE5');
    let markElem7 = this.markElms('#highlight7', '#b1dedc');
    let markElem8 = this.markElms('#highlight8', '#A1C2F1');

    this.textAnnotation = annotationGroup([
      markElem1,
      markElem2,
      markElem3,
      markElem4,
      markElem5,
      markElem6,
      markElem7,
      markElem8,
    ]);
    this.textAnnotation.show();
  }

  underlineHeading() {
    let underlineHeading = annotate(
      document.querySelector('#hd-underline') as HTMLElement,
      this.underlineSetting('#75C2F6')
    );
    underlineHeading.show();
  }

  markSetting(color: string) {
    return {
      type: 'highlight',
      color: color,
      multiline: true,
      animate: true,
    } as RoughAnnotationConfig;
  }

  markElms(id: string, color: string) {
    return annotate(
      document.querySelector(id) as HTMLElement,
      this.markSetting(color)
    );
  }

  underlineSetting(color: string) {
    return {
      type: 'underline',
      color: color,
      strokeWidth: 3,
      padding: [2, 2],
    } as RoughAnnotationConfig;
  }
}
