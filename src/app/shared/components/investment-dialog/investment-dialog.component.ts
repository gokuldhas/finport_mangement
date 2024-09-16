import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-investment-dialog',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './investment-dialog.component.html',
  styleUrl: './investment-dialog.component.scss'
})
export class InvestmentDialogComponent {
  investmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InvestmentDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.investmentForm = this.fb.group({
      assetType: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      purchasePrice: ['', [Validators.required, Validators.min(1)]],
      purchaseDate: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      // Send form data back to the parent component
      this.snackBar.open('Investment details submitted successfully!', 'Close', {
        duration: 3000, // Duration in milliseconds (3 seconds)
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      this.dialogRef.close(this.investmentForm.value);
      
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}