import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from "../api.service";
import { TambahUserComponent } from "../tambah-user/tambah-user.component";
import { DetailUserComponent } from "../detail-user/detail-user.component";
import { DialogKonfirmasiComponent } from "../dialog-konfirmasi/dialog-konfirmasi.component";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  constructor(public dialog: MatDialog, public api: ApiService) {
    this.getData();
  }

  dataUser: any = [];
  getData() {
    this.api.baca().subscribe((res) => {
      this.dataUser=res;
    });
  }

  buatUser() {
    const dialogRef = this.dialog.open(TambahUserComponent, {
      width: "450px",
      data:null
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

  detail(item) {
    const dialogRef = this.dialog.open(DetailUserComponent, {
      width: "450px",
      data:item
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  edit(data) {
    const dialogRef = this.dialog.open(TambahUserComponent, {
      width: '450px',
      data:data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();    
    });
  }

  konfirmasiHapus(id) {
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
			width: '450px',      
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result == true)
			{
        console.log('Menghapus data');
        this.api.hapus(id).subscribe(res => {
          this.getData();
        })
			}
		});
  }

  ngOnInit(): void {}
}
