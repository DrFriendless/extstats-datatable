import {Component, Input, OnChanges} from "@angular/core";
import {DataTable} from "./DataTable";
import * as _ from "lodash-es";
import {Paginator} from "./Paginator";

@Component({
    selector: "es-bootstrap-paginator",
    imports: [
        Paginator
    ],
    template: `
        <es-paginator #p [table]="mfTable">
            @if (p.dataLength > p.rowsOnPage) {
                <ul class="pagination">
                    <li class="page-item" [class.disabled]="p.activePage <= 1" (click)="p.setPage(1)">
                        <a class="page-link" style="cursor: pointer">&laquo;</a>
                    </li>
                    @if (p.activePage > 4 && p.activePage + 1 > p.lastPage) {
                        <li class="page-item" (click)="p.setPage(p.activePage - 4)">
                            <a class="page-link" style="cursor: pointer">{{ p.activePage - 4 }}</a>
                        </li>
                    }
                    @if (p.activePage > 3 && p.activePage + 2 > p.lastPage) {
                        <li class="page-item" (click)="p.setPage(p.activePage - 3)">
                            <a class="page-link" style="cursor: pointer">{{ p.activePage - 3 }}</a>
                        </li>
                    }
                    @if (p.activePage > 2) {
                        <li class="page-item" (click)="p.setPage(p.activePage - 2)">
                            <a class="page-link" style="cursor: pointer">{{ p.activePage - 2 }}</a>
                        </li>
                    }
                    @if (p.activePage > 1) {
                        <li class="page-item" (click)="p.setPage(p.activePage - 1)">
                            <a class="page-link" style="cursor: pointer">{{ p.activePage - 1 }}</a>
                        </li>
                    }
                    <li class="page-item active">
                        <a class="page-link" style="cursor: pointer">{{ p.activePage }}</a>
                    </li>
                    @if (p.activePage + 1 <= p.lastPage) {
                        <li class="page-item" (click)="p.setPage(p.activePage + 1)">
                            <a class="page-link" style="cursor: pointer">{{ p.activePage + 1 }}</a>
                        </li>
                    }
                    @if (p.activePage + 2 <= p.lastPage) {
                        <li class="page-item" (click)="p.setPage(p.activePage + 2)">
                            <a class="page-link" style="cursor: pointer">{{ p.activePage + 2 }}</a>
                        </li>
                    }
                    @if (p.activePage + 3 <= p.lastPage && p.activePage < 3) {
                        <li class="page-item" (click)="p.setPage(p.activePage + 3)">
                            <a class="page-link" style="cursor: pointer">{{ p.activePage + 3 }}</a>
                        </li>
                    }
                    @if (p.activePage + 4 <= p.lastPage && p.activePage < 2) {
                        <li class="page-item" (click)="p.setPage(p.activePage + 4)">
                            <a class="page-link" style="cursor: pointer">{{ p.activePage + 4 }}</a>
                        </li>
                    }
                    <li class="page-item" [class.disabled]="p.activePage >= p.lastPage" (click)="p.setPage(p.lastPage)">
                        <a class="page-link" style="cursor: pointer">&raquo;</a>
                    </li>
                </ul>
            }
            @if (p.dataLength > minRowsOnPage) {
                <ul class="pagination pull-right float-sm-right">
                    @for (rows of rowsOnPageSet; track rows) {
                        <li class="page-item" [class.active]="p.rowsOnPage===rows" (click)="p.setRowsOnPage(rows)">
                            <a class="page-link" style="cursor: pointer">{{ rows }}</a>
                        </li>
                    }
                </ul>
            }
        </es-paginator>
    `
})
export class BootstrapPaginator implements OnChanges {
    @Input("rowsOnPageSet") rowsOnPageSet = [];
    @Input("table") mfTable!: DataTable;

    minRowsOnPage = 0;

    ngOnChanges(changes: any): any {
        if (changes.rowsOnPageSet) {
            const m = _.min(this.rowsOnPageSet);
            if (m) this.minRowsOnPage = m;
        }
    }
}