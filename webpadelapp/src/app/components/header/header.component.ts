import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule], // Importa los módulos necesarios
})
export class HeaderComponent {
  categories = [
    {
      name: 'Palas de padel',
      subcategories: ['Adidas', 'Bullpadel', 'Babolat'],
      open: false,
    },
    {
      name: 'Accesorios',
      subcategories: ['Bolsas', 'Calzados'],
      open: false,
    },
  ];

  toggleSubmenu(categoryName: string): void {
    this.categories = this.categories.map((cat) =>
      cat.name === categoryName ? { ...cat, open: !cat.open } : { ...cat, open: false }
    );
  }
}
