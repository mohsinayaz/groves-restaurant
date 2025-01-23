import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-fourth-section',
  imports: [NgFor, CardComponent],
  templateUrl: './fourth-section.component.html',
  styleUrl: './fourth-section.component.scss',
})
export class FourthSectionComponent {
  images = [
    {
      name: 'Vide Vera',
      path: '/image-1.png',
      width: '300',
    },
    {
      name: 'Zama Zulu',
      path: '/image-2.png',
      width: '300',
    },
    {
      name: 'Khawaja Yanni',
      path: '/image-3.png',
      width: '300',
    },
    {
      name: 'Yamagata',
      path: '/image-4.png',
      width: '250',
    },
  ];
}
