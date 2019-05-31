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
            tag: "Your score will be shared between all the countries the application supports",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      }
    ]
  }

}
