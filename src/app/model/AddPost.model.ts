export class AddPost {
    public id: any;
    public title: any;
    public description: any;
    public tags: any;
    public image: any;

    constructor(
        id: any,
        title: any,
        description: any,
        tags: any,
        image: any
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.image = image;

    }
}