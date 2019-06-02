import { Component, OnInit } from '@angular/core';
import { TagDataHolder, TagType } from '../models/tag-data-holder';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {
  tags: Array<TagDataHolder>;
  content: string;
  constructor() { 
    
    this.content = `Please read these Terms and Conditions carefully before using SpaceIt mobile application.
Your access to and use of the application is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all users..
By accessing or using the application you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access SpaceIt application
`
  }

  ngOnInit() {
        this.tags = [
      {
        tag: "Content",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "SpaceIt application is a game that contains a movement of the device in order to achieve score",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "Declarations",
        type: TagType.TITLE,
        subTags: [
          {
            tag: `SpaceIt it’s mobile game based on player movement of the device, therefore the device may be damaged during the using of the app, first we are not commit it will work,
                  and SpaceIt will NOT take any responsibility for any damage to the device that caused by the use of the app.`,
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "Amendments",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "We may update this policy from time to time by publishing a new version.",
            subTags: [],
            type: TagType.SUB_TITLE
          }, 
          {
            tag: "You should check this page occasionally to ensure you are happy with any changes to this policy.",
            subTags: [],
            type: TagType.SUB_TITLE
          }, 
          {
            tag: "We may notify you of changes to this policy.",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      }
    ]
  }

}
