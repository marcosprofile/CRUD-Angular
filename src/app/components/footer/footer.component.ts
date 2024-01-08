import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent { }
