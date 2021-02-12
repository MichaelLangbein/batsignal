import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, moodIcons } from 'src/app/model/model';
import * as emailJs from 'emailjs-com';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



interface State {
  state: 'running' | 'success' | 'error';
  message: string;
}


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  public state$: BehaviorSubject<State>;
  public iconList = moodIcons;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.state$ = new BehaviorSubject<State>({
      state: 'running',
      message: 'Nachricht wird gesendet ...'
    });
  }

  ngOnInit(): void {

    
    console.log('Sending data: ', this.data);
    
    if (environment.production) {
      // const userId = 'user_djbx0rfioGQKFZnvDo7t8';
      // const serviceId = 'user_djbx0rfioGQKFZnvDo7t8';
      // const templateId = 'template_m8m9oci';
      // emailJs.init(userId);
      // emailJs.send(serviceId, templateId, this.data, userId).then(
      //   (response) => {
      //     console.log('success: ', response);
      //     this.state$.next({
      //       state: 'success',
      //       message: 'Michael wurde benachrichtigt'
      //     });
      //   },
      //   (error) => {
      //     console.error(error);
      //     this.state$.next({
      //       state: 'error',
      //       message: `Ein Fehler ist aufgetreten: ${JSON.stringify(error)}`
      //     });
      //   }
      // );
      setTimeout(() => {
        this.state$.next({
          state: 'success',
          message: 'Michael wurde benachrichtigt.'
        });
      }, 2000);
    } else {
      setTimeout(() => {
        this.state$.next({
          state: 'success',
          message: 'Michael wurde benachrichtigt.'
        });
      }, 2000);
    }

  }

}
