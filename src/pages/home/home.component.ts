import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  imageSrc: string; // Placeholder for image URL
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home-modern.component.css']
})

export class HomeComponent {
   activeIndex: number = 1; // Pradeep Kumar is the active one in the image (index 1)

  testimonials: Testimonial[] = [
    {
      name: 'Navjot Singh',
      location: 'Punjab, India',
      quote: 'They went above and beyond to ensure our safety and comfort throughout the trip. We are grateful to Air Asia Tour And Travels.',
      imageSrc: 'images/male1.png' // Replace with actual path
    },
    {
      name: 'Pradeep Kumar',
      location: 'Haryana, India',
      quote: 'Our family had the most memorable vacation. Air Asia Tour And Travels took care of every detail.',
      imageSrc: 'images/male2.png' // Replace with actual path
    },
    {
      name: 'Mohd Hanif',
      location: 'Mumbai, India',
      quote: 'Absolutely stunning experience in Kashmir. Highly recommend travelling with Air Asia Tour And Travels!',
      imageSrc: 'images/male3.png' // Replace with actual path
    }
  ];

  /**
   * Sets the currently active testimonial based on the index.
   * @param index The index of the testimonial to activate.
   */
  setActiveTestimonial(index: number) {
    this.activeIndex = index;
  }
}
