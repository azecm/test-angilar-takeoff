import {Component, Input, ViewEncapsulation} from "@angular/core";


@Component({
    selector: 'user-icon',
    template: `
        <div class="image" [style.backgroundImage]="src"></div>
        <div>
            <div class="user">{{user}}</div>
            <div class="role">{{role}}</div>
        </div>
    `,
    styleUrls: ['user-icon.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class UserIconComponent {
    @Input()
    user: string;
    @Input()
    role: string;
    @Input()
    image: string;

    get src() {
        return `url("./assets/${this.image}")`;
    }
}