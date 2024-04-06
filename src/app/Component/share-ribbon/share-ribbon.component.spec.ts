import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRibbonComponent } from './share-ribbon.component';

describe('ShareRibbonComponent', () => {
  let component: ShareRibbonComponent;
  let fixture: ComponentFixture<ShareRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareRibbonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
