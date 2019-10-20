import {Component, Input} from "@angular/core";
import {Column} from "./DataTable";

@Component({
    selector: "[mfHead]",
    template: `<tr>
        <th *ngFor="let column of columns"><mfDefaultSorter by="{{column.field}}" title="{{column.tooltip}}">{{column.name}}</mfDefaultSorter></th>
    </tr>`
})
export class DataTableHead<R extends object> {
    @Input("columns") columns: Column<R>[];
}