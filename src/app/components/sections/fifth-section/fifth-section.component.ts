import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fifth-section',
  imports: [NgFor],
  templateUrl: './fifth-section.component.html',
  styleUrl: './fifth-section.component.scss',
})
export class FifthSectionComponent {
  images = [
    {
      name: 'Restaurants',
      path: '/image-1.png',
      width: '300',
    },
    {
      name: 'Experiences',
      path: '/image-2.png',
      width: '300',
    },
    {
      name: 'Events',
      path: '/image-3.png',
      width: '300',
    },
    {
      name: 'Halls',
      path: '/image-4.png',
      width: '250',
    },
  ];
}
