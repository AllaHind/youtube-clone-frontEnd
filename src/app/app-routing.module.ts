import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadVideoComponent} from "./upload-video/upload-video.component";
import {VideoCreatedComponent} from "./video-created/video-created.component";

const routes: Routes = [
  {
    path:'upload-video',component:UploadVideoComponent
  },
  {
    path:'video-created',component:VideoCreatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
