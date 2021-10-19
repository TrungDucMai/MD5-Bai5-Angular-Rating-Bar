import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountdownTimerComponent} from "./countdown-timer/countdown-timer.component";
import {RatingBarComponent} from "./rating-bar/rating-bar.component";

const routes: Routes = [
  {path:"rating-bar", component: RatingBarComponent},
  {path:"countdown-timer", component: CountdownTimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
