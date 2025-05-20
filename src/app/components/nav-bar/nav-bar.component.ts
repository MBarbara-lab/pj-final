import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isMobile = false
  ngOnInit(): void {
    this.isMobile = window.matchMedia("(max-width: 430px)").matches;
  }
}
