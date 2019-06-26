export class Post {

    likes: number;
    date: string;

    constructor(public title: string, 
                public content: string) {
        const creationDate = new Date();
        this.date = creationDate.toLocaleDateString();
        this.likes = 0;
    }
}