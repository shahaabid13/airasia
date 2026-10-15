import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about.component',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
 count: number = 0;
  target: number = 2000;
  observer!: IntersectionObserver;

  reviews = [
    {
      name: 'Aman Sharma',
      date: '2025-08-01',
      text: 'I recently booked a travel package with Air Asia Tour And Travels and had a truly wonderful experience! Their service was excellent from start to finish — everything was well organized, the staff was helpful and polite, and all arrangements were perfect.',
      rating: 5
    },
    {
      name: 'Rohit Verma',
      date: '2025-07-15',
      text: 'Excellent trip planning. Air Asia Tour And Travels made my vacation stress-free and enjoyable. Highly recommended!',
      rating: 5
    },
    {
      name: 'Shishu Tiwari',
      date: '2025-06-20',
      text: 'The best travel experience I have had in Kashmir. Very professional and friendly service.',
      rating: 4
    }
  ];

  currentReview = 0;

  ngOnInit() {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    // Observe when section is visible to start counter
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && this.count === 0) {
          this.startCounter();
        }
      });
    });
  }

  ngAfterViewInit() {
    if (typeof document === 'undefined') {
      return;
    }

    const section = document.querySelector('.about-reviews');
    if (section && this.observer) {
      this.observer.observe(section);
    }
  }

  startCounter() {
    let step = Math.ceil(this.target / 100); // speed
    let interval = setInterval(() => {
      this.count += step;
      if (this.count >= this.target) {
        this.count = this.target;
        clearInterval(interval);
      }
    }, 30);
  }

  nextReview() {
    this.currentReview = (this.currentReview + 1) % this.reviews.length;
  }

  prevReview() {
    this.currentReview = (this.currentReview - 1 + this.reviews.length) % this.reviews.length;
  }

  getStars(rating: number): string[] {
    return Array(rating).fill('★');
  }
}
