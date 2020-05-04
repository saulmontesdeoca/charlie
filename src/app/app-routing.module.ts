import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './main-components/nav-bar/nav-bar.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageCarrouselComponent } from './main-components/image-carrousel/image-carrousel.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ComprarComponent } from './comprar/comprar.component';
import { LogInComponent } from './log-in/log-in.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'news-feed', component: NewsFeedComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'comprar', component: ComprarComponent},
  {path: 'agregar', component: AgregarComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
