import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }
