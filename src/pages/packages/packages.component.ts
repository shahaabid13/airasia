import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  packages = [
    {
      name: 'Gulmarg',
      img: 'images/gulmarg-snow.jpg',
      days: '3 days',
      persons: '2 Person',
      desc: "Explore Gulmarg's winter wonderland with skiing and snowboarding."
    },
    {
      name: 'Doodhpathri',
      img: 'images/doodhpathri.jpg',
      days: '3 days',
      persons: '2 Person',
      desc: "Explore Doodhpathri's meadows and streams with photography tours and traditional village."
    },
    {
      name: 'Gurez Valley',
      img: 'images/gurez-2.jpg',
      days: '3 days',
      persons: '2 Person',
      desc: "Embark on an adventure in Gurez Valley with camping under the stars."
    }
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
