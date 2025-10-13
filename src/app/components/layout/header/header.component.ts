import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Product {
  name: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  products: Product[] = [
    {
      name: 'Tango Gestión',
      description: 'Software para PyMEs',
      icon: '💼',
      route: '/productos/gestion'
    },
    {
      name: 'Tango Punto de Venta',
      description: 'Para comercios',
      icon: '🏪',
      route: '/productos/pdv'
    },
    {
      name: 'Tango Estudios Contables',
      description: 'Para contadores',
      icon: '📊',
      route: '/productos/estudios'
    },
    {
      name: 'Tango Resto',
      description: 'Software gastronómico',
      icon: '🍽️',
      route: '/productos/resto'
    },
    {
      name: 'Tango Factura',
      description: 'Facturación electrónica',
      icon: '📄',
      route: '/productos/factura'
    }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}