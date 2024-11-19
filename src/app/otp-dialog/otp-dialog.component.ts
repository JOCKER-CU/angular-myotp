import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-otp-dialog',
  standalone: true,
  imports: [],
  templateUrl: './otp-dialog.component.html',
  styleUrl: './otp-dialog.component.css'
})
export class OtpDialogComponent {

  otpConfig = {
    length: 6,
    inputClass: 'otp-input',
    // other configuration options
  };

  otp!: string;

  constructor(
    public dialogRef: MatDialogRef<OtpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  handleOtpChange(otp: string) {
    this.otp = otp;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('Submitted OTP: ', this.otp);
    this.dialogRef.close(this.otp);
  }
}
