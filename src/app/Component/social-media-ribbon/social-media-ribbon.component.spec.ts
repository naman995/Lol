import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaRibbonComponent } from './social-media-ribbon.component';

describe('SocialMediaRibbonComponent', () => {
  let component: SocialMediaRibbonComponent;
  let fixture: ComponentFixture<SocialMediaRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaRibbonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
