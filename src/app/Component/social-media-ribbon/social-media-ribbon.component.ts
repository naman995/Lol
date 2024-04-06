import { Component } from '@angular/core';
import { SocialMediaButtonComponent } from '../social-media-button/social-media-button.component';

@Component({
  selector: 'app-social-media-ribbon',
  standalone: true,
  imports: [SocialMediaButtonComponent],
  templateUrl: './social-media-ribbon.component.html',
  styleUrl: './social-media-ribbon.component.css',
})
export class SocialMediaRibbonComponent {
  name: any = 'NowWhere';
}
