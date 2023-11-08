import { Component } from '@angular/core';
import { annotate } from 'rough-notation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  ngOnInit(): void {
    this.underlineHeading();
  }

  underlineHeading() {
    let underlineHeadingElm = annotate(
      document.querySelector('#projects-hd-underline') as HTMLElement,
      {
        type: 'underline',
        color: '#6D67E4',
        strokeWidth: 3,
      }
    );
    underlineHeadingElm.show();
  }
}
