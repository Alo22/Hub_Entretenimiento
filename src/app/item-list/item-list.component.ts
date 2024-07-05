import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
items = [
  {
    image: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png',
    tiitle: 'Tittulo 1',
    description: 'descripcion 1'
  },
  {
    image: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png',
    tiitle: 'Tittulo 2',
    description: 'descripcion 2'
  },
  {
    image: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png',
    tiitle: 'Tittulo 3',
    description: 'descripcion 3'
  }
]
}
