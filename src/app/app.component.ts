import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { Mood, moodIcons, titleOptions } from './model/model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public iconList: object;
  public title: string;
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    public dialog: MatDialog
  ) {
    this.iconList = moodIcons;
  }

  ngOnInit(): void {
    const selectedIndex = Math.floor(titleOptions.length * Math.random());
    this.title = titleOptions[selectedIndex];
  }

  public openDialog(mood: Mood) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {mood: mood}
    });
    dialogRef.afterClosed().subscribe(r => {
      const confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: r
      });
    });
  }
}
