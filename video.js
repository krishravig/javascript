export default class Video {
    constructor(name){
        this.name = name
    }
    display(){
        console.log(`Inside video display:${this.name}`);
    }
}

const obj = new Video('Horror');
export function play (){
    console.log('video is playing');
}
