import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstSectionComponent } from '../sections/first-section/first-section.component';
import { FourthSectionComponent } from '../sections/fourth-section/fourth-section.component';
import { SecondSectionComponent } from '../sections/second-section/second-section.component';
import { ThirdSectionComponent } from '../sections/third-section/third-section.component';
import { FifthSectionComponent } from '../sections/fifth-section/fifth-section.component';
import { SixthSectionComponent } from '../sections/sixth-section/sixth-section.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
    SixthSectionComponent,
    NgIf,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  hideContent: Boolean = false;
  openSideMenu(val: Boolean) {
    this.hideContent = val;
  }
}
