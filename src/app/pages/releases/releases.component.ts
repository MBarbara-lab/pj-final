import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';


interface Car {
  modelo: string;
  preco: number;
  alturaC: number;
  alturaV: number;
  alturaLS: number;
  capacidadeC: number;
  motor: number;
  potencia: number;
  volumeC: number;
  roda: string;
  img: string;
}

@Component({
  selector: 'app-releases',
  imports: [CommonModule],
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent {
  // referência ao <dialog>
  @ViewChild('compareDialog') compareDialog!: ElementRef<HTMLDialogElement>;

  // lista de todos os carros
  carList: Car[] = [
    {
      modelo: 'XL Cabine Simples 2.2 Diesel 4X4 MT 2022',
      preco: 183850,
      alturaC: 511,
      alturaV: 1821,
      alturaLS: 232,
      capacidadeC: 1234,
      motor: 2.2,
      potencia: 160,
      volumeC: 1420,
      roda: 'Aço Estampado 16',
      img: 'assets/img/XL Cabine.jpg'
    },
    {
      modelo: 'XLS 2.2 Diesel 4X4 AT 2022',
      preco: 220690,
      alturaC: 511,
      alturaV: 1821,
      alturaLS: 232,
      capacidadeC: 1076,
      motor: 2.2,
      potencia: 160,
      volumeC: 1180,
      roda: 'Aço Estampado 16',
      img: 'assets/img/xls 2.2 diesel.jpg'
    },
    {
      modelo: 'Storm 3.2 Diesel 4X4 AT 2022',
      preco: 222790,
      alturaC: 511,
      alturaV: 1821,
      alturaLS: 232,
      capacidadeC: 1040,
      motor: 3.2,
      potencia: 200,
      volumeC: 1180,
      roda: 'Liga Leve 17',
      img: 'assets/img/storm.jpg'
    }
  ];

  // carros selecionados para comparação
  cars: Car[] = [];

  /**
   * (un)marca um carro para comparar — até 2 no máximo
   */
  setCarToCompare(event: Event, car: Car): void {
    const input = event.target as HTMLInputElement;
    if (!input.checked) {
      this.cars = this.cars.filter(c => c !== car);
      return;
    }
    if (this.cars.length >= 2) {
      input.checked = false;
      alert('Não é possível selecionar mais de dois carros!');
      return;
    }
    this.cars.push(car);
  }

  /**
   * Abre o diálogo de comparação, se exatamente 2 carros estiverem selecionados
   */
  showCompare(): void {
    if (this.cars.length !== 2) {
      alert('Selecione 2 carros para comparar.');
      return;
    }
    this.compareDialog.nativeElement.showModal();
  }

  /**
   * Fecha o diálogo
   */
  hideCompare(): void {
    this.compareDialog.nativeElement.close();
  }
}

