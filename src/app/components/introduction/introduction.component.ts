import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent {
  checkAnimationDone: boolean = false;

  constructor(public dataService: DataService) {
    this.playAnimation();
  }

  playAnimation() {
    this.checkAnimationDone = this.dataService.checkIfAnimationIsDone;
    setTimeout(() => {
      if (this.checkAnimationDone) {
        return;
      }
      this.checkAnimationDone = this.dataService.afterAnimationDone();
    }, 2700);
  }
}
