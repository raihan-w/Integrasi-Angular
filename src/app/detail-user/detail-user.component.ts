import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<DetailUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
  }

}
