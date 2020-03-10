import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeaderComponent } from 'src/shared/components/header/header.component';
import { FooterComponent } from 'src/shared/components/footer/footer.component';
import { LoaderComponent } from 'src/shared/components/loader/loader.component';

@NgModule({
  declarations: [
  	HeaderComponent,
  	FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
  	HeaderComponent,
  	FooterComponent,
    LoaderComponent,
  	RouterModule,
  	HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule { }
