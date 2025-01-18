// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


//Original: 
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Nuevo enfoque
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { CategoryComponent } from './app/components/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'category/:subcategory', component: CategoryComponent }, // Ruta dinámica para categorías
  { path: '**', redirectTo: '' }, // Redirección por defecto
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configuración de rutas
    provideHttpClient(), // Configuración del cliente HTTP
  ],
});
