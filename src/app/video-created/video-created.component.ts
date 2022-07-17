import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-video-created',
  templateUrl: './video-created.component.html',
  styleUrls: ['./video-created.component.css']
})
export class VideoCreatedComponent implements OnInit {

  videoFormDetails : FormGroup;
  title : FormControl=new FormControl('');
  description : FormControl=new FormControl('');
  videoStatus : FormControl=new FormControl('');

  constructor() {
    this.videoFormDetails=new FormGroup(
      {
        title: this.title,
        description: this.description,
        videoStatus: this.videoStatus,
      }
    );

  }


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }


  ngOnInit(): void {
  }

}
