import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {

    location: Location;
    showPost: boolean = false;
    viewPost: boolean = false;
    constructor(
        location: Location,
        private router: Router,
    ) {
        this.location = location;
    }

    ngOnInit() {
        console.log("NAV BAr");
    }
    showPostsText() {
        if (this.showPost == true) {
            this.viewPost == true;
        }
        else {
            this.viewPost == false;
        }
    }
    addNewPost() {
        this.router.navigate(['/add']);
    }
}
