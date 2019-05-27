import { Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
    @ViewChild('container') component: any;
    ngOnInit(): void {
      console.log(this.component.nativeElement.clientHeight);
    }
}
