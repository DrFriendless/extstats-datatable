import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {DataFilterPipe} from "./data-filter.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DataFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}