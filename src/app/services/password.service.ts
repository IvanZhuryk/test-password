import { Injectable } from '@angular/core';
import {
  StrongPasswordRegx,
  StrongPasswordWidthOutCharRegx,
  StrongPasswordWidthOutNumbRegx,
  StrongPasswordWidthOutSymRegx,
} from '../constants/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  sectionsData: { section1: string; section2: string; section3: string } = {
    section1: 'gray',
    section2: 'gray',
    section3: 'gray',
  };
  sectionDataObs$ = new BehaviorSubject(this.sectionsData);
  constructor() {
    this.sectionDataObs$.next(this.sectionsData);
  }
  passwordFormField(value: string) {
    if (!value?.match(/^.{8,}$/)) {
      this.lessThenEightPass();
    } else if (value?.match(StrongPasswordRegx)) {
      this.strongPass();
    } else if (value?.match(StrongPasswordWidthOutSymRegx)) {
      this.mediumPass();
    } else if (value?.match(StrongPasswordWidthOutCharRegx)) {
      this.mediumPass();
    } else if (value?.match(StrongPasswordWidthOutNumbRegx)) {
      this.mediumPass();
    } else {
      this.easyPass();
    }
  }
  emptyPass() {
    this.sectionsData = {
      section1: 'gray',
      section2: 'gray',
      section3: 'gray',
    };
    this.sectionDataObs$.next({ ...this.sectionsData });
  }
  lessThenEightPass() {
    this.sectionsData = {
      section1: 'red',
      section2: 'red',
      section3: 'red',
    };
    this.sectionDataObs$.next({ ...this.sectionsData });
  }
  easyPass() {
    this.sectionsData = {
      section1: 'red',
      section2: 'gray',
      section3: 'gray',
    };
    this.sectionDataObs$.next({ ...this.sectionsData });
  }
  mediumPass() {
    this.sectionsData = {
      section1: 'yellow',
      section2: 'yellow',
      section3: 'gray',
    };
    this.sectionDataObs$.next({ ...this.sectionsData });
  }
  strongPass() {
    this.sectionsData = {
      section1: 'green',
      section2: 'green',
      section3: 'green',
    };
    this.sectionDataObs$.next({ ...this.sectionsData });
  }
}
