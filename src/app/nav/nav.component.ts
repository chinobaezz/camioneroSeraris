import { Component, ViewChild, ElementRef } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @ViewChild('myNav', { static: false }) myNav!: ElementRef;

  closeNav() {
    const navElement = this.myNav.nativeElement;
    navElement.classList.remove('show');
  }
}
