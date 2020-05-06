import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActionButtonComponent} from "./components/action-button.component";
import {TabButtonComponent} from "./components/tab-button.component";
import {InputSearchComponent} from "./components/input-search.component";
import {LeftBlockComponent} from "./blocks/left-block.component";
import {ContentBlockComponent} from "./blocks/content-block.component";
import {MenuButtonComponent} from "./components/menu-button.component";
import {UserIconComponent} from "./components/user-icon.component";
import {BreadcrumbsComponent} from "./components/breadcrumbs.component";
import {PollBlockComponent} from "./poll/poll-block.component";
import {PollItemComponent} from "./poll/poll-item.component";
import {AddConditionComponent} from "./blocks/add-condition.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PollEntityComponent} from "./poll/poll-entity.component";
import {ResultBlockComponent} from "./blocks/result-block.component";

@NgModule({
    declarations: [
        AppComponent,
        ActionButtonComponent,
        TabButtonComponent,
        InputSearchComponent,
        LeftBlockComponent,
        ContentBlockComponent,
        MenuButtonComponent,
        UserIconComponent,
        BreadcrumbsComponent,
        PollBlockComponent,
        PollItemComponent,
        AddConditionComponent,
        ResultBlockComponent,
        PollEntityComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
