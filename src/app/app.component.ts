import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="page-vew">
            <left-block></left-block>
            <content-block></content-block>
        </div>
    `,
    styleUrls: ['app.component.scss']
})
export class AppComponent {

}
