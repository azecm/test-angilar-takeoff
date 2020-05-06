import {Component, Input, ViewEncapsulation} from "@angular/core";


@Component({
    selector: 'tab-button',
    template: `
        <button>
            <ng-content></ng-content>
        </button>
    `,
    styleUrls: ['tab-button.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class TabButtonComponent {
    @Input()
    activate: boolean;
}