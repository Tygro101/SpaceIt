import { Component, OnInit } from '@angular/core';
import { TagDataHolder, TagType } from '../models/tag-data-holder';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  tags: Array<TagDataHolder>;
  constructor() {
    this.initData();
   }

  ngOnInit() {
    
  }
  initData() {
    this.tags = [
      {
        tag: "Introduction",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "SpaceIt application privacy policy, we will explain how we will treat your personal information.",
            subTags: [],
            type: TagType.SUB_TITLE
          }
        ]
      },

      {
        tag: "Collection personal information",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "We are currently using your google play information for this game, high score etc...",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "International data transfers",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "Your score will be shared between all the countries the application supports.",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "Retaining personal information",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "The user score will be stored in the user device as long as the application exists on the user device.",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "Security of personal information",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "We will not take responsibility for any loss of any information that the application used.",
            subTags: [],
            type: TagType.SUB_TITLE
          }, 
          {
            tag: "All the information that has been sent or stored is by user's responsibility only, We will not take responsibility.",
            subTags: [],
            type: TagType.SUB_TITLE
          }, 
          {
            tag: "User is responsible for keeping the information save.",
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


