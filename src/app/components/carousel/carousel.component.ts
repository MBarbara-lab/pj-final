import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CarouselItemData } from '../../models/carouselItemData';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnDestroy {
  @Input() itemsData: CarouselItemData[] = [
    {
      imageAlt: "Visão lateral dianteira de uma Ford Ranger Black escura em ambiente urbano",
      imageSrc: "/img/imagem_1.jpg",
      title: "Esta é a nova Ranger Ford 2022. Verifique novidades."
    },
    {
      imageAlt: "Um automóvel Ford Model T histórico rodeado por uma multidão",
      imageSrc: "/img/imagem_2.jpg",
      title: "Ford a nossa história"
    },
    {
      imageAlt: "Um Ford Bronco Sport moderno, visto de lado em terreno natural perto da água e vegetação.",
      imageSrc: "/img/imagem_3.jpg",
      title: "Nova Ford Bronco Sport 2022"
    }
  ];

  index = 0;
  selectedItem: CarouselItemData = this.itemsData[0];
  isCarouselRunning = false;
  carouselTimer: any = null;

  ngOnDestroy(): void {
    this.stop();
  }

  updateIndex(step: number) {
    const len = this.itemsData.length;
    this.index = (this.index + step + len) % len;
    this.selectedItem = this.itemsData[this.index];
  }

  start(interval: number) {
    if (this.carouselTimer || this.isCarouselRunning === true) return;

    this.isCarouselRunning = true;
    this.selectedItem = this.itemsData[this.index];

    this.carouselTimer = setInterval(() => {
      this.updateIndex(1);
    }, interval);
  }

  stop() {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
      this.isCarouselRunning = false;
    }
  }

  next() {
    this.updateIndex(1);
  }

  back() {
    this.updateIndex(-1);
  }
}
