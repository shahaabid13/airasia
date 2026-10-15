import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services.component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fa fa-globe',
      title: 'All India Tour',
      desc: "Immerse yourself in Kashmir's allure with our meticulously designed tours"
    },
    {
      icon: 'fa fa-hotel',
      title: 'Hotel Reservation',
      desc: 'Reservation services for hotels, houseboats in Srinagar, Pahalgam and other regions.'
    },
    {
      icon: 'fa fa-user',
      title: 'Travel Guides',
      desc: 'Experienced local guides for historical and cultural tours in Srinagar.'
    },
    {
      icon: 'fa fa-cogs',
      title: 'Event Management',
      desc: 'Full-service wedding planning in picturesque locations like gardens in Srinagar or resorts.'
    },
    {
      icon: 'fa fa-shield-alt',
      title: 'Safety Assurance',
      desc: 'Ensuring high standards of safety, comfort, and professionalism.'
    },
    {
      icon: 'fa fa-concierge-bell',
      title: 'Specialty Services',
      desc: 'Arrangements for pilgrimage tours to Amarnath, Vaishno Devi, and other religious sites.'
    },
    {
      icon: 'fa fa-mountain',
      title: 'Yatra packages',
      desc: 'Extension packages to Ladakh, exploring Leh, Nubra Valley, Pangong Lake.'
    },
    {
      icon: 'fa fa-shopping-bag',
      title: 'Shopping and Handicraft Tours',
      desc: 'Guided tours to local markets and handicraft centers.'
    },
    {
      icon: 'fa fa-mountain',
      title: 'Ladakh Extension Tours',
      desc: 'Extension packages to Ladakh, exploring Leh, Nubra Valley, Pangong Lake.'
    }
  ];
}
