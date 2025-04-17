import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
