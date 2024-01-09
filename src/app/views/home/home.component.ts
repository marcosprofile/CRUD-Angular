import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }
}
