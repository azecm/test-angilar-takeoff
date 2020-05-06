import {Component, ViewEncapsulation} from "@angular/core";


@Component({
    selector: 'menu-button',
    template: `
        <button>
            <ng-content></ng-content>
        </button>
    `,
    styleUrls: ['menu-button.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class MenuButtonComponent {

}