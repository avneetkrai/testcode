import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TalosService } from 'src/app/service/talos.service';
import { AddPost } from 'src/app/model/AddPost.model';

@Component({
    selector: 'app-addscreen',
    templateUrl: 'addscreen.component.html'
})

export class AddScreenComponent {
    showPost: boolean = false;
    addPostForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private talosService: TalosService) {
        this.addPostForm = this.formBuilder.group({
            title: [],
            description: [],
            tags: [],
            image: []
        });
    }
    ngOnInit() {
        this.showPost = true;
    }
    onSubmit() {
        if (this.addPostForm.invalid) {
            alert('Please fill all fileds .');
        } else {
            this.talosService.postAddService(this.preparforSave(this.addPostForm.getRawValue())).subscribe(
                data => {
                    //this.errors(data);
                    if (data.status == 'SUCCESS') {
                        alert("Post Added Successfully")
                    }
                },
                err => {
                    if (err != undefined && err != '') {
                        //this.errors(err);
                        alert("Invalid Data")
                    }
                    return err;
                }
            );

        }
    }

    preparforSave(postAddData: any) {
        let addPost;
        addPost = new AddPost(
            postAddData.id,
            postAddData.title,
            postAddData.description,
            postAddData.tags,
            postAddData.image
        );

        return addPost;
    }
}

