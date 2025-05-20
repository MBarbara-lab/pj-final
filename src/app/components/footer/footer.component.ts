import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  isMobile = false
  ngOnInit(): void {
    this.isMobile = window.matchMedia("(max-width: 480px)").matches

    if (!this.isMobile) {
      this.isMediaMenuVisible = true
    }
  }           
  
  isMediaMenuVisible = false

  toggleSocialMediaMenu(): void {
    if (this.isMobile) {
      if (!this.isMediaMenuVisible) {
        this.isMediaMenuVisible = true
      } else {
        this.isMediaMenuVisible = false
      }
    }
  }
}
