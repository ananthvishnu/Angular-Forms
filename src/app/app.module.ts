import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempletDrivenTwoComponent } from './templet-driven-two/templet-driven-two.component';
import { PipesComponent } from './pipes/pipes.component'
import { shortenPipe } from './pipes/shorten.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    TempletDrivenTwoComponent,
    PipesComponent,
    shortenPipe,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
