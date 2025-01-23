import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second-section',
  imports: [NgIf],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss',
})
export class SecondSectionComponent {
  isPlaying = false;

  playVideo(video: HTMLVideoElement): void {
    video.play();
    this.isPlaying = true;
    video.onpause = () => (this.isPlaying = false);
  }
}
