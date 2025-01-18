// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-category',
//   standalone: true,
//   imports: [],
//   templateUrl: './category.component.html',
//   styleUrl: './category.component.css'
// })
// export class CategoryComponent {

// }

//ORIGINAL 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryName: string | null = '';
  products: any[] | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('subcategory');
    if (this.categoryName) {
      this.fetchProducts(this.categoryName);
    }
  }

  fetchProducts(subcategory: string): void {
    this.http
      .get<any[]>(`http://localhost:3000/api/products?subcategory=${subcategory}`)
      .subscribe((data) => (this.products = data));
  }
}
