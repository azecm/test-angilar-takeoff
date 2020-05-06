export enum EType {
    none, range, type, status
}

export const pollTitles = ['', 'Диапазон', 'Тип', 'Статус'];
export const pollTypeName = ['', 'Возраст респондента', 'Тип карты лояльности', 'Статус карты лояльности'];

export class PollItem {
    static index = 0;
    ind: number;
    private _type = EType.none;
    entityList = [] as PollItemEntity[];

    constructor() {
        this.ind = ++PollItem.index;
    }

    get type() {
        return this._type;
    }

    set type(val) {
        this._type = val;
        this.entityList = [];
    }

    addEntity() {
        this.entityList.push(new PollItemEntity());
    }
}

export class PollItemEntity {
    static index = 0;
    ind: number;
    elements = [] as HTMLInputElement[];

    constructor() {
        this.ind = ++PollItemEntity.index;
    }
}