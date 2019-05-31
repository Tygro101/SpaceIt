import { Component, OnInit, Input } from '@angular/core';
import { TagDataHolder } from '../models/tag-data-holder';

@Component({
  selector: 'tag-component',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tagDataHolder: TagDataHolder;
  subTags: Array<TagDataHolder>;
  test: Array<string>;
  constructor() { 

    this.test = new Array<string>();
    this.test.push("1");
    this.test.push("2");
    this.test.push("3");
    this.test.push("4");
  }

  ngOnInit() {
    this.subTags = this.tagDataHolder.subTags;
  }

}
