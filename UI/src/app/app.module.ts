import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      FlexLayoutModule,],
  bootstrap: [AppComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }