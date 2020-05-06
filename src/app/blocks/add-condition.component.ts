import {Component, EventEmitter, Output, ViewEncapsulation} from "@angular/core";


@Component({
    selector: 'add-condition',
    template: `
        <button (click)="onClick()">
            <svg focusable="false" data-prefix="fal" data-icon="plus" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 384 512">
                <path fill="currentColor"
                      d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <div>
                Нажмите, чтобы добавить новое условие выборки.<br>
                Все условия связываются между собой логическим "И"
            </div>
        </button>
    `,
    styleUrls: ['add-condition.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class AddConditionComponent {
    @Output()
    onAdd = new EventEmitter<void>();

    onClick() {
        this.onAdd.emit();
    }
}