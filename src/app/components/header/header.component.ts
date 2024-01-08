import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppMaterialModule } from '../../app-material.module';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ AppMaterialModule, RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent { }
