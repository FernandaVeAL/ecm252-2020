import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { SugestoesComponent } from './pages/sugestoes/sugestoes.component';

const routes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'sugestoes', component: SugestoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
