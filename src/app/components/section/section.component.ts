import { Component, Input, OnInit } from '@angular/core';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent implements OnInit {
  section1: string;
  section2: string;
  section3: string;
  constructor(private readonly passService: PasswordService) {
    this.passService.sectionDataObs$.subscribe((sectionsData) => {
      this.section1 = sectionsData.section1;
      this.section2 = sectionsData.section2;
      this.section3 = sectionsData.section3;
      console.log(sectionsData);
    });
  }
  ngOnInit(): void {}
}
