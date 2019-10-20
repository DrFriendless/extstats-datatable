import {Component, Input} from "@angular/core";
import {Column, DataTable} from "./DataTable";

@Component({
    selector: "[mfBody]",
    template: `<tr *ngFor="let row of mfTable.data">
        <td *ngFor="let column of columns" title="{{column.valueTooltip(row)}}" [innerHtml]="column.valueHtml(row)"></td>
    </tr>`
})
export class DataTableBody<R extends object> {
    @Input("columns") columns: Column<R>[];

    public constructor(public mfTable: DataTable) {
    }
}