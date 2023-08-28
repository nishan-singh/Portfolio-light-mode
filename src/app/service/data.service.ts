import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  checkIfAnimationIsDone = false;

  afterAnimationDone(): boolean {
    return (this.checkIfAnimationIsDone = true);
  }
}
