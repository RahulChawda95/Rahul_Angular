import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, acion: string) {
    this._snackBar.open(message, acion, {
      duration: 1000,
      verticalPosition: 'bottom',
    });
  }
}
