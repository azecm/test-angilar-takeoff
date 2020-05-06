import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation
} from "@angular/core";
import {EType, PollItem, PollItemEntity, pollTitles, pollTypeName} from "./_common";


@Component({
    selector: 'poll-item',
    template: `
        <div class="flex">
            <div class="col-1">
                <div class="title">Условие</div>
            </div>
            <div class="col-2">
                <select class="width-100" (change)="onChangeType($event)">
                    <option [value]="EType.none">Выберите условие</option>
                    <option [value]="EType.range">{{pollTypeName[EType.range]}}</option>
                    <option [value]="EType.type">{{pollTypeName[EType.type]}}</option>
                    <option [value]="EType.status">{{pollTypeName[EType.status]}}</option>
                </select>
            </div>
        </div>
        <div class="body">
            <poll-entity *ngFor="let entity of data.entityList; trackBy: identify; let i=index"
                         [index]="i+1"
                         [data]="entity"
                         [type]="type"></poll-entity>
        </div>
        <div class="flex">
            <div class="col-1">

            </div>
            <div class="col-2 flex flex-between">
                <action-button type="add" (click)="onAddClick()">Добавить {{buttonText}}</action-button>
                <action-button type="remove" (click)="onRemoveClick()">Удалить условие</action-button>
            </div>
        </div>
    `,
    styleUrls: ['poll-item.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PollItemComponent {
    EType = EType;
    pollTypeName = pollTypeName;

    @Input()
    data: PollItem;

    @Output()
    onRemove = new EventEmitter<PollItem>();

    constructor(private cdr: ChangeDetectorRef) {
    }

    get type() {
        return this.data.type;
    }

    get buttonText() {
        return pollTitles[this.type].toLowerCase();
    }

    identify(_: number, item: PollItemEntity) {
        return item.ind;
    }

    onChangeType(e: Event) {
        const el = e.target as HTMLSelectElement;
        this.data.type = parseInt(el.value, 10);
        this.onAddClick();
        this.cdr.markForCheck();
    }

    onAddClick() {
        if (this.data.type) {
            this.data.addEntity();
            this.cdr.markForCheck();
        }
    }

    onRemoveClick() {
        this.onRemove.emit(this.data);
    }
}