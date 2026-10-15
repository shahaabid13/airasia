import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  categories = [
    {
      name: 'Cars',
      img: 'images/v.jpg',
      route: '/gallery/cars'
    },
    {
      name: 'Hotels',
      img: 'images/car1.jpg',
      route: '/gallery/hotels'
    },
    {
      name: 'Handicraft Shops',
      img: 'images/s.jfif',
      route: '/gallery/handicrafts'
    },
  ];
    phoneNumber = '+919797000873'; // your phone number
  whatsappMessage = 'Hello, I am interested in booking a tour with Air Asia Tour and Travels!';

  callNow() {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  whatsappNow() {
    const msg = encodeURIComponent(this.whatsappMessage);
    window.open(`https://wa.me/${this.phoneNumber}?text=${msg}`, '_blank');
  }
}
