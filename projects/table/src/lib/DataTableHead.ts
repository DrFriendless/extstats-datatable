import {Component, Input} from "@angular/core";
import {DefaultSorter} from "./DefaultSorter";
import {Column} from "./model";

@Component({
    selector: "[es-table-head]",
    imports: [
        DefaultSorter
    ],
    template: `
        <tr>
            @for (column of columns; track column) {
                <th>
                    <es-default-sorter by="{{column.field}}" title="{{column.tooltip}}">{{ column.name }}
                    </es-default-sorter>
                </th>
            }
        </tr>`
})
export class DataTableHead<R extends object> {
    @Input("columns") columns!: Column<R>[];
}