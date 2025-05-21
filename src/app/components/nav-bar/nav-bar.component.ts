import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
    router = inject(Router)

  logout () {
    sessionStorage.removeItem("username")
    this.router.navigate([""])
  }

  isMobile = false

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

   ngOnInit(): void {
    this.checkViewport();
  }

  private checkViewport() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.matchMedia("(max-width: 480px)").matches;
      
      window.addEventListener('resize', () => {
        this.isMobile = window.matchMedia("(max-width: 480px)").matches;
      });
    }
  }
}
