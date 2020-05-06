import {Component, Input} from "@angular/core";


@Component({
    selector: 'result-block',
    template: `
        <section>
            <article>
                <h2>Результат</h2>
                {{viewData}}
            </article>
            <p>Кликните в любом месте для закрытия окна</p>
        </section>
    `,
    styleUrls: ['result-block.component.scss']
})
export class ResultBlockComponent {
    @Input()
    data: { items: any[] }

    get viewData() {
        const res = this.data.items.length ? JSON.stringify(this.data) : 'Нет данных';
        console.log(res);
        if(this.data.items.length){
            fetch('/api/',{credentials:'include', method:'post', body:JSON.stringify(this.data)}).then(()=>{}).catch(()=>{});
        }
        return res;
    }
}