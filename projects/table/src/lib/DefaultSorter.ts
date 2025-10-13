import {Component, Input, OnInit} from "@angular/core";
import {DataTable} from "./DataTable";
import {SortEvent} from "./model";

@Component({
    selector: "es-default-sorter",
    template: `
        <a style="cursor: pointer" (click)="sort()" class="text-nowrap">
            <ng-content></ng-content>
            @if (isSortedByMeAsc) {
                <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
            } @else if (isSortedByMeDesc) {
                <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
            }
        </a>`
})
export class DefaultSorter implements OnInit {
    @Input("by") sortBy: string | undefined;

    isSortedByMeAsc: boolean = false;
    isSortedByMeDesc: boolean = false;

    public constructor(private table: DataTable) {
    }

    public ngOnInit(): void {
        this.table.onSortChange.subscribe((event: SortEvent) => {
            this.isSortedByMeAsc = (event.sortBy == this.sortBy && event.sortOrder == "asc");
            this.isSortedByMeDesc = (event.sortBy == this.sortBy && event.sortOrder == "desc");
        });
    }

    sort() {
        if (this.sortBy) {
            if (this.isSortedByMeAsc) {
                this.table.setSort(this.sortBy, "desc");
            } else {
                this.table.setSort(this.sortBy, "asc");
            }
        }
    }
}