import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisComponent } from './pais/pais.component';
import { HomeComponent } from './home/home.component';
import { PaisdetalleComponent } from './paisdetalle/paisdetalle.component';
import {RouterModule,Routes,PreloadAllModules} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {RouterService} from './router.service';
import { InformacionComponent } from './informacion/informacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BanderasComponent } from './banderas/banderas.component';

const rutas: Routes = [
  {path: '',component:HomeComponent},
  {path: 'pais',component: PaisComponent},
  {path: 'paises',component: PaisComponent},
  {path: 'paisdetalle',component: PaisdetalleComponent},
  {path: 'informacion',component: InformacionComponent},
  {path: 'banderas',component: BanderasComponent}

  
  ]

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    HomeComponent,
    PaisdetalleComponent,
    InformacionComponent,
    NavbarComponent,
    FooterComponent,
    BanderasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      rutas,
      {
        useHash:false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
