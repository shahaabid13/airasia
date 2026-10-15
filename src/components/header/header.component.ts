import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   constructor(private renderer: Renderer2) {}

  setFontSize(size: string) {
    const body = document.querySelector('body');
    if (size === 'small') {
      this.renderer.setStyle(body, 'font-size', '14px');
    } else if (size === 'medium') {
      this.renderer.setStyle(body, 'font-size', '16px');
    } else {
      this.renderer.setStyle(body, 'font-size', '18px');
    }
  }
    closeNavbar() {
    const collapse = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null;
    if (!collapse) return;

    if (collapse.classList.contains('show')) {
      if (toggler) {
        // trigger Bootstrap collapse if JS is present
        toggler.click();
      } else {
        // fallback: remove class and update aria-expanded
        this.renderer.removeClass(collapse, 'show');
        const btn = document.querySelector('.navbar-toggler') as HTMLElement | null;
        if (btn) this.renderer.setAttribute(btn, 'aria-expanded', 'false');
      }
    }
  }
}
