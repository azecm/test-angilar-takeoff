import {AfterViewInit, Component, ElementRef, Input, ViewChildren, ViewEncapsulation} from "@angular/core";
import {EType, PollItemEntity, pollTitles} from "./_common";


@Component({
    selector: 'poll-entity',
    template: `
        <div class="col-1">
            <div *ngIf="index>1" class="operator">или</div>
            {{title}} {{index}}
        </div>
        <div class="col-2">
            <ng-container [ngSwitch]="type">
                <ng-container *ngSwitchCase="EType.range">
                    от <input type="text" #input> до <input type="text" #input>
                </ng-container>
                <ng-container *ngSwitchCase="EType.type">
                    <select class="entity" #input>
                        <option>Gold</option>
                        <option>Silver</option>
                    </select>
                </ng-container>
                <ng-container *ngSwitchCase="EType.status">
                    <select class="entity" #input>
                        <option>Активна</option>
                        <option>Пассивна</option>
                    </select>
                </ng-container>
            </ng-container>
        </div>
    `,
    styleUrls: ['poll-entity.component.scss']
})
export class PollEntityComponent implements AfterViewInit {
    @ViewChildren('input')
    elements: ElementRef<HTMLInputElement>[]
    EType = EType;
    @Input()
    index: number;
    @Input()
    type: EType;
    @Input()
    data: PollItemEntity;

    get title() {
        return pollTitles[this.type];
    }

    ngAfterViewInit() {
        this.data.elements = this.elements.map(el => el.nativeElement);
    }
}