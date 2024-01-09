import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {

  constructor(private headerService: HeaderService) { }

  get title(): string {
    return this.headerService.headerData.title;
  }
  
  get icon(): string {
    return this.headerService.headerData.icon;
  }
  
  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
