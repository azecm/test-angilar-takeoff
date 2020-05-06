import {Component, ViewEncapsulation} from "@angular/core";


@Component({
    selector: 'content-block',
    template: `
        <div class="row">
            <input-search></input-search>
            <user-icon user="Alexandr C." role="Администратор" image="photo.jpg"></user-icon>
        </div>

        <div class="row">
            <breadcrumbs-block [parts]="breadcrumbs"></breadcrumbs-block>
        </div>

        <div class="tab-buttons">
            <tab-button>Параметры</tab-button>
            <tab-button>Вопросы</tab-button>
            <tab-button>Логика</tab-button>
            <tab-button>Условия</tab-button>
            <tab-button class="active">Респонденты</tab-button>
        </div>

        <div class="tab-view">
            <poll-block></poll-block>
        </div>
    `,
    styleUrls: ['content-block.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ContentBlockComponent {
    breadcrumbs = ['Опросы', 'Добавить опрос'];
}