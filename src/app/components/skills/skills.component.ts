import { Component } from '@angular/core';
import { annotate } from 'rough-notation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  ngOnInit(): void {
    this.underlineHeading();
  }

  underlineHeading() {
    let underlineHeadingElm = annotate(
      document.querySelector('#skill-hd-underline') as HTMLElement,
      {
        type: 'underline',
        color: '#75C2F6',
        strokeWidth: 3,
      }
    );
    underlineHeadingElm.show();
  }
}
