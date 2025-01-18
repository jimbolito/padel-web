import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
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
