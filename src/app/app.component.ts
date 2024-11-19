import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDialogModule,
    NgOtpInputModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  openOtpDialog(): void {
    const dialogRef = this.dialog.open(OtpDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Received OTP: ', result);
    });
  }
}
