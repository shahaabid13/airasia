import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent {
  category: string = '';
  images: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';

    // Example: different images for each category
    if (this.category === 'cars') {
      this.images = [
        'images/v1.jpg',
        'images/v2.jpg',
        'images/v3.jpg',
      ];
    } else if (this.category === 'hotels') {
      this.images = [
        'images/h1.jpg',
        'images/h2.jpg',
        'images/h3.jpg',
      ];
    } else if (this.category === 'handicrafts') {
      this.images = [
        'images/s1.jfif',
        'images/s2.jfif',
      ];
    } else {
      this.images = [        'images/houseboat-2.jpg',        'images/jammu-4.jpg.webp',        'images/jammu-7.jpg.webp',      ];
    }
  }
}
