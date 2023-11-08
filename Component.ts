
// imports here //
// import { Component } from '@angular/core';

// @Component({
//     selector:'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css']
// })

class WishItem {
    constructor( public wishText: string, public isComplete:boolean=false ){
    }
}

export class AppComponent {
    items = [
        new WishItem('To Learn Angular'),
        new WishItem('Get coffee', true),
        new WishItem('Find grass that cuts itself')
    ];
    title = 'wishlist';
}