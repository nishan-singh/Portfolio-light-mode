import { Component, ViewChild } from '@angular/core';
import { annotate } from 'rough-notation';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  @ViewChild('highlightElm') hightLightElm: any;

  constructor() {}

  ngOnInit(): void {
    let highLight = document.querySelector('#highlightElm') as HTMLElement;
    let annotation = annotate(highLight, {
      type: 'highlight',
      color: '#f9d423',
      padding: [5, 2],
      multiline: true,
    });
    annotation.show();
  }
}
