import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-third-section',
  imports: [NgFor],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.scss',
})
export class ThirdSectionComponent {
  images = [
    {
      name: 'KHAWAJA YANNI',
      path: '/image-1.png',
      width: '300',
    },
    {
      name: 'ABDUL RAEES',
      path: '/image-2.png',
      width: '300',
    },
    {
      name: 'ABDUL RAEES',
      path: '/image-3.png',
      width: '300',
    },
    {
      name: 'HABIB RAUF',
      path: '/image-4.png',
      width: '250',
    },
  ];
}
