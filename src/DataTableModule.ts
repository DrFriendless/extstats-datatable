import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DataTable} from "./DataTable";
import {DefaultSorter} from "./DefaultSorter";
import {Paginator} from "./Paginator";
import {BootstrapPaginator} from "./BootstrapPaginator";
import {TableController} from "./TableController";
import {DataTableHead} from "./DataTableHead";
import {DataTableBody} from "./DataTableBody";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DataTable,
        DefaultSorter,
        Paginator,
        BootstrapPaginator,
        TableController,
        DataTableHead,
        DataTableBody
    ],
    exports: [
        DataTable,
        DefaultSorter,
        Paginator,
        BootstrapPaginator,
        TableController,
        DataTableHead,
        DataTableBody
    ]
})
export class DataTableModule {

}