import { Component } from '@angular/core';
import { SocialMediaRibbonComponent } from '../../Component/social-media-ribbon/social-media-ribbon.component';
import { NavbarComponent } from '../../Component/navbar/navbar.component';
import { ColorModule } from '../../../../color.module';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SocialMediaRibbonComponent,
    NavbarComponent,
    ColorModule,
     
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
