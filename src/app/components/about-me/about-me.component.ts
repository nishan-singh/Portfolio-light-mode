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
    let markSetting = {
      type: 'highlight',
      color: '#f9d423',
      multiline: true,
      padding: [2, 2],
    } as RoughAnnotationConfig;
    let markElem1 = annotate(
      document.querySelector('#highlight1') as HTMLElement,
      markSetting
    );
    let markElem2 = annotate(
      document.querySelector('#highlight2') as HTMLElement,
      markSetting
    );
    this.annotation = annotationGroup([markElem1, markElem2]);
    this.annotation.show();
  }
}
