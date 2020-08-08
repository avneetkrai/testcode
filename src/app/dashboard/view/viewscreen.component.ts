import { Component, Input } from '@angular/core';
import { TalosService } from 'src/app/service/talos.service';

@Component({
    selector: 'app-viewscreen',
    templateUrl: 'viewscreen.component.html'
})

export class ViewScreenComponent {
    @Input() selecteId: any;
    @Input() cardDataSelected: any;
    constructor(
        private talosService: TalosService
    ) { }

    selectedPost: any;
    ngOnInit() {
        this.selectedPost = this.cardDataSelected;
        console.log(this.selecteId);
        //this.getSelectedPost(this.selecteId);
        console.log("i am selected " + this.selectedPost);
    }

    // getSelectedPost(selectedId) {
    //     this.talosService.getSelectedPostDetails(selectedId).subscribe((data) => {
    //         let output = <any>data;
    //         this.selectedPost = output;
    //         console.log("pppp" + output)
    //     })
    // }

}
