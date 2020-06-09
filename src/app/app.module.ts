import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { SugestoesComponent } from './pages/sugestoes/sugestoes.component';
import { LoginComponent } from './pages/partials/login/login.component';
import { ListaCursosComponent } from './pages/partials/lista-cursos/lista-cursos.component';
import { ListaProfessoresComponent } from './pages/partials/lista-professores/lista-professores.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    ProfessoresComponent,
    SugestoesComponent,
    LoginComponent,
    ListaCursosComponent,
    ListaProfessoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
