import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { NoticiasComponent } from './noticias/noticias.component';

export const routes: Routes = [
    { path:'', component :HomeComponent},
    { path: 'nav', component: NavComponent },
    { path: 'home', component: HomeComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'proyecto', component: ProyectoComponent },
    { path: 'noticia', component: NoticiasComponent },

  ];


  export const appRoutingProviders: any[] = [];

  export const routing = RouterModule.forRoot(routes);