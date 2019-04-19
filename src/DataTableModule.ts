import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DataTable} from "./DataTable";
import {DefaultSorter} from "./DefaultSorter";
import {Paginator} from "./Paginator";
import {BootstrapPaginator} from "./BootstrapPaginator";
import {TableController} from "./TableController";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DataTable,
        DefaultSorter,
        Paginator,
        BootstrapPaginator,
        TableController
    ],
    exports: [
        DataTable,
        DefaultSorter,
        Paginator,
        BootstrapPaginator,
        TableController
    ]
})
export class DataTableModule {

}