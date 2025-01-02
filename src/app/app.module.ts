import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScamazonComponent } from './scamazon/scamazon.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComputingMachineComponent } from './computing-machine/computing-machine.component';
import { InformationComponent } from './information/information.component';
import { TestComponent } from './Valve/test.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScamazonComponent,
    ComputingMachineComponent,
    InformationComponent,
    TestComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([ 
      { path: 'home', component: HomeComponent },
      { path: 'scamazon', component: ScamazonComponent },
      { path: 'test', component: TestComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
