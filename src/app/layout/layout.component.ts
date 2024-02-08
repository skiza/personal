import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  private router = inject(Router)

  irDashboard():void {
    // gurdar datos o loque  sea 
    this.router.navigate(['/dashboard'])
  }
}
