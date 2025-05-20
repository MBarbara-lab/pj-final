import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-pop-up',
  imports: [],
  templateUrl: './welcome-pop-up.component.html',
  styleUrl: './welcome-pop-up.component.css'
})
export class WelcomePopUpComponent {
   closePopUp() {
    const popUp = document.getElementById("popUp")

    if (popUp) {
      popUp.style.display = "none"
    }
  }
}
