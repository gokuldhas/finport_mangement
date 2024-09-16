import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDialogComponent } from './investment-dialog.component';

describe('InvestmentDialogComponent', () => {
  let component: InvestmentDialogComponent;
  let fixture: ComponentFixture<InvestmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
