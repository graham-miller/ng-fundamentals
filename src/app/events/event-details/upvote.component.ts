import { Component, EventEmitter, Input, Output } from '@angular/core';

 @Component({
     selector: 'upvote',
     template: `
     <div class="voting-widget-container pointable" (click)="onClick()">
        <div class="well voting-widget">
            <div class="voting-button">
                <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
            </div>
            <div class="badge badge-inverse voting-count">{{count}}</div>
        </div>
     </div>
     `,
    styleUrls: ['./upvote.component.css']
 })
 export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val: boolean) {
        this.iconColor = val ? 'red' : 'white';
    };
    @Output() vote = new EventEmitter();

    iconColor: string = "white";

    onClick() {
        this.vote.emit({});
    }
 }