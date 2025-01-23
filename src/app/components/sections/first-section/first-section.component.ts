import { NgClass, NgForOf } from '@angular/common';
import { Component, HostListener, output } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-first-section',
  imports: [SlickCarouselModule, NgForOf, NgClass],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss',
})
export class FirstSectionComponent {
  isMenuOpen = false;
  isDropdownOpen = false;
  menuValue = output<Boolean>();
  selectedLanguage = {
    code: 'en',
    flag: 'https://flagcdn.com/w40/gb.png',
    label: 'English',
  };
  slides = [
    {
      name: 'KHAWAJA YANNI',
      title: 'The New Era of Luxury',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      buttonText: 'Book Reservation Now',
    },
    {
      name: 'ABDUL RAEES',
      title: 'Experience the Finest Dining',
      description: 'Explore a range of exquisite culinary experiences.',
      buttonText: 'Discover More',
    },
    {
      name: 'HABIB RAUF',
      title: 'Plan Your Visit',
      description: 'Enjoy world-class services in a luxurious environment.',
      buttonText: 'Start Planning',
    },
  ];
  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  };

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuValue.emit(this.isMenuOpen);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeLanguage(code: string, flag: string, label: string) {
    this.selectedLanguage = { code, flag, label };
    this.isDropdownOpen = false;
  }
}
