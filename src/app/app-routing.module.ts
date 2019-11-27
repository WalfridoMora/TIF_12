import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeesComponent} from './homees/homees.component';
import { HomeenComponent } from './homeen/homeen.component';
import { GlutEnComponent } from './glut-en/glut-en.component';
import { GlutEsComponent } from './glut-es/glut-es.component';
import { ImmEnComponent } from './imm-en/imm-en.component';
import { ImmEsComponent } from './imm-es/imm-es.component';
import { TestEnComponent } from './test-en/test-en.component';
import { TestEsComponent } from './test-es/test-es.component';
import { PatEnComponent } from './pat-en/pat-en.component';
import { PatEsComponent } from './pat-es/pat-es.component';
import { EarnEnComponent } from './earn-en/earn-en.component';
import { EarnEsComponent } from './earn-es/earn-es.component';
import { PlanEnComponent } from './plan-en/plan-en.component';
import { PlanEsComponent } from './plan-es/plan-es.component';
import { ConsultTestEnComponent } from './consult-test-en/consult-test-en.component';
import { ConsultTestEsComponent } from './consult-test-es/consult-test-es.component';
const routes: Routes = [
{path:'',component:HomeenComponent},
{path:'homees',component:HomeesComponent},
{path:'homeen',component:HomeenComponent},
{path:'glut_es',component:GlutEsComponent},
{path:'glut_en',component:GlutEnComponent},
{path:'imm_es',component:ImmEsComponent},
{path:'imm_en',component:ImmEnComponent},
{path:'test_es',component:TestEsComponent},
{path:'test_en',component:TestEnComponent},
{path:'pat_es',component:PatEsComponent},
{path:'pat_en',component:PatEnComponent},
{path:'earn_es',component:EarnEsComponent},
{path:'earn_en',component:EarnEnComponent},
{path:'plan_es',component:PlanEsComponent},
{path:'plan_en',component:PlanEnComponent},
{path:'consult_test_es',component:ConsultTestEsComponent},
{path:'consult_test_en',component:ConsultTestEnComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

