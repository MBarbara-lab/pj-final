import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WelcomePopUpComponent } from '../../components/welcome-pop-up/welcome-pop-up.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, WelcomePopUpComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(CarouselComponent) carouselComponent!: CarouselComponent;

  ngAfterViewInit(): void {
    this.carouselComponent.start(2000);
  }
}
