import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedImage: string | null = null;

  portfolioItems = [
    { image: '/imgs/ph-1.jpg', alt: 'Portfolio 1' },
    { image: '/imgs/ph-3.jpg', alt: 'Portfolio 3' },
    { image: '/imgs/ph-4.jpg', alt: 'Portfolio 4' },
    { image: '/imgs/ph-5.jpg', alt: 'Portfolio 5' },
    { image: '/imgs/ph-6.jpg', alt: 'Portfolio 6' },
    { image: '/imgs/ph-7.jpg', alt: 'Portfolio 7' },
  ];

  openModal(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
