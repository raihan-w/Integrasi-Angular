import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tambah-user',
  templateUrl: './tambah-user.component.html',
  styleUrls: ['./tambah-user.component.css']
})
export class TambahUserComponent implements OnInit {

  data:any={};
  constructor(
    public api:ApiService,
    public dialogRef:MatDialogRef<TambahUserComponent>,
    @Inject(MAT_DIALOG_DATA) public itemData:any
  ) {
    if (itemData != null) {
      this.data = itemData;
    }
   }
  ngOnInit() {
  }
  simpan(data) {
    if (data.id == undefined) {
      this.api.simpan(data).subscribe(res => {
      this.dialogRef.close(true);
    });
    } else {
      this.api.ubah(data).subscribe(res => {
        this.dialogRef.close(true);
      })
    }
    
  }

}
