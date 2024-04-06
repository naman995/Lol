import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-social-media-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './social-media-button.component.html',
  styleUrl: './social-media-button.component.css',
})
export class SocialMediaButtonComponent {
  @Input() icon?: string;
  @Input() text?: string;
  @Input() link?: string;
}
