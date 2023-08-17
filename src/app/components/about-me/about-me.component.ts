import { Component } from '@angular/core';
import { annotate, annotationGroup } from 'rough-notation';
import { RoughAnnotationConfig } from 'rough-notation/lib/model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  annotation: any;

  ngOnInit(): void {
    this.markText();
  }

  markText() {
    let markElem1 = annotate(
      document.querySelector('#highlight1') as HTMLElement,
      this.markSetting('#A8DF8E')
    );
    let markElem2 = annotate(
      document.querySelector('#highlight2') as HTMLElement,
      this.markSetting('#f9d423')
    );
    let markElem3 = annotate(
      document.querySelector('#highlight3') as HTMLElement,
      this.markSetting('#BEADFA')
    );
    let markElem4 = annotate(
      document.querySelector('#highlight4') as HTMLElement,
      this.markSetting('#8BE8E5')
    );
    let markElem5 = annotate(
      document.querySelector('#highlight5') as HTMLElement,
      this.markSetting('#FEA1A1')
    );
    let markElem6 = annotate(
      document.querySelector('#highlight6') as HTMLElement,
      this.markSetting('#FE7BE5')
    );
    let markElem7 = annotate(
      document.querySelector('#highlight7') as HTMLElement,
      this.markSetting('#b1dedc')
    );
    let markElem8 = annotate(
      document.querySelector('#highlight8') as HTMLElement,
      this.markSetting('#A1C2F1')
    );

    this.annotation = annotationGroup([
      markElem1,
      markElem2,
      markElem3,
      markElem4,
      markElem5,
      markElem6,
      markElem7,
      markElem8,
    ]);
    this.annotation.show();
  }

  markSetting(color: string) {
    return {
      type: 'highlight',
      color: color,
      multiline: true,
      padding: [2, 2],
    } as RoughAnnotationConfig;
  }
}
