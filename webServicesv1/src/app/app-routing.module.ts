import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [    
  {
    path: '', component: HomeComponent,
    data: {title: "Home"},
  }, 
  {
    path: 'application', component: ApplicationComponent,
    data: {title: "Get started!"},
  },
  {
  path: 'about', component: AboutComponent,
  data: {title: "About"},
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
