import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [    
  {
    path: '', component: HomeComponent
  }, 
  {
    path: 'application', component: ApplicationComponent
  },
  {
  path: 'about', component: AboutComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
