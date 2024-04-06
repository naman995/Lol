import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaButtonComponent } from './social-media-button.component';

describe('SocialMediaButtonComponent', () => {
  let component: SocialMediaButtonComponent;
  let fixture: ComponentFixture<SocialMediaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
