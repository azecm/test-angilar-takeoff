import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from "@angular/core";
import {EType, PollItem, pollTypeName} from "./_common";


@Component({
    selector: 'poll-block',
    template: `
        <header>Добавить опрос</header>
        <poll-item *ngFor="let item of items; trackBy:identify; let i = index"
                   [class]="pollItemClassName(i)"
                   [data]="item"
                   (onRemove)="onRemove($event)"
        ></poll-item>
        <add-condition (onAdd)="onAdd()"></add-condition>
        <footer>
            <button class="button-test" (click)="onTest()">Протестировать опрос</button>
            <button class="button-next">Далее →</button>
        </footer>
        <result-block *ngIf="resultData" [data]="resultData" (click)="onTestClose()"></result-block>
    `,
    styleUrls: ['poll-block.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PollBlockComponent {
    items = [] as PollItem[];

    resultData = null as any;

    constructor(private cdr: ChangeDetectorRef) {
    }

    identify(_: number, item: PollItem) {
        return item.ind;
    }

    pollItemClassName(ind: number) {
        return `type-${(ind % 4) + 1}`;
    }

    onAdd() {
        this.items.push(new PollItem());
        this.cdr.markForCheck();
    }

    onRemove(item: PollItem) {
        this.items.splice(this.items.indexOf(item), 1);
        this.cdr.markForCheck();
    }

    onTestClose() {
        this.resultData = null;
        this.cdr.markForCheck();
    }

    onTest() {
        type TRow = ((string | number)[]|(string | number));
        interface ResItem {
            type: EType
            typeName: string
            rows: TRow[]
        }

        const result = this.resultData = {resultName: 'Опрос', items: [] as ResItem[]};
        for (const item of this.items) {
            if (!item.type || !item.entityList.length) continue;
            const rows = [] as TRow[];
            const resItem = {type: item.type, typeName: pollTypeName[item.type], rows} as ResItem;
            result.items.push(resItem);
            for (const entity of item.entityList) {
                switch (entity.elements.length) {
                    case 0:{
                        break;
                    }
                    case 1:{
                        rows.push(entity.elements[0].value);
                        break;
                    }
                    default:{
                        const row = [] as (string | number)[];
                        rows.push(row);
                        for (const elem of entity.elements) {
                            row.push(elem.value);
                        }
                        break;
                    }
                }
            }
        }

        this.cdr.markForCheck();
    }
}