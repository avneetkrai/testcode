import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TalosService } from '../service/talos.service';
import { ViewScreenComponent } from './view/viewscreen.component';

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  @ViewChild(ViewScreenComponent) viewpost: ViewScreenComponent;
  cardsData: any;
  selecteId: any;
  cardDataSelected: any;
  isViewSelected: boolean = false;
  @Output() postEvent = new EventEmitter<string>();
  constructor(
    private router: Router,
    private talosService: TalosService
  ) { }

  ngOnInit() {
    this.getposts();
  }

  getposts() {
    this.talosService.getPostsData().subscribe((data) => {
      let output = <any>data;
      this.cardsData = output;
      //this.viewScreen(this.cardsData[1]);
    })
  }



  viewScreen(cardDetails): void {
    this.selecteId = cardDetails.id;
    this.cardDataSelected = cardDetails;
    this.isViewSelected = true;
    console.log("here" + this.selecteId);
    // this.router.navigate(['/view', this.selecteId]);

  }

}

