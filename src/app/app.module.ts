import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesign } from './material-design/material';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TambahUserComponent } from './tambah-user/tambah-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    TambahUserComponent,
    DetailUserComponent,
    DialogKonfirmasiComponent
  ],
  entryComponents:[
    TambahUserComponent,
    DetailUserComponent,
    DialogKonfirmasiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
