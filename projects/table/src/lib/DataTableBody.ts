import {Component, Input} from "@angular/core";
import {DataTable} from "./DataTable";
import {Column} from "./model";

@Component({
    selector: "[es-table-body]",
    template: `@for (row of table.data; track row) {
        <tr>
            @for (column of columns; track column) {
                <td title="{{column.valueTooltip(row)}}" [innerHtml]="column.valueHtml(row)"></td>
            }
        </tr>
    }`
})
export class DataTableBody<R extends object> {
    @Input("columns") columns!: Column<R>[];

    public constructor(public table: DataTable) {
    }
}