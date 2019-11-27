import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuenComponent } from './menuen/menuen.component';
import { MenuesComponent } from './menues/menues.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeesComponent } from './homees/homees.component';
import { HomeenComponent } from './homeen/homeen.component';
import { GlutEsComponent } from './glut-es/glut-es.component';
import { GlutEnComponent } from './glut-en/glut-en.component';
import { ImmEsComponent } from './imm-es/imm-es.component';
import { ImmEnComponent } from './imm-en/imm-en.component';
import { PatEsComponent } from './pat-es/pat-es.component';
import { PatEnComponent } from './pat-en/pat-en.component';
import { TestEsComponent } from './test-es/test-es.component';
import { TestEnComponent } from './test-en/test-en.component';
import { EarnEsComponent } from './earn-es/earn-es.component';
import { EarnEnComponent } from './earn-en/earn-en.component';
import { PlanEsComponent } from './plan-es/plan-es.component';
import { PlanEnComponent } from './plan-en/plan-en.component';
import { ConsultTestEsComponent } from './consult-test-es/consult-test-es.component';
import { ConsultTestEnComponent } from './consult-test-en/consult-test-en.component';
import { DisclaimeresComponent } from './disclaimeres/disclaimeres.component';
import { DisclaimerenComponent } from './disclaimeren/disclaimeren.component';
import { ContactenComponent } from './contacten/contacten.component';
import { ContactesComponent } from './contactes/contactes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuenComponent,
    MenuesComponent,
    HeaderComponent,
    FooterComponent,
    HomeesComponent,
    HomeenComponent,
    GlutEsComponent,
    GlutEnComponent,
    ImmEsComponent,
    ImmEnComponent,
    PatEsComponent,
    PatEnComponent,
    TestEsComponent,
    TestEnComponent,
    EarnEsComponent,
    EarnEnComponent,
    PlanEsComponent,
    PlanEnComponent,
    ConsultTestEsComponent,
    ConsultTestEnComponent,
    DisclaimeresComponent,
    DisclaimerenComponent,
    ContactenComponent,
    ContactesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule, 
    MatButtonModule, 
    MatIconModule, 
    MatCardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
