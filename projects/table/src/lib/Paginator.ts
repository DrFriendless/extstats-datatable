import {Component, Input, SimpleChange, OnChanges} from "@angular/core";
import {DataTable} from "./DataTable";
import {PageEvent} from "./model";

@Component({
    selector: "es-paginator",
    template: `<ng-content></ng-content>`
})
export class Paginator implements OnChanges {
    @Input("table") table!: DataTable;

    public activePage: number = 0;
    public rowsOnPage: number = 0;
    public dataLength: number = 0;
    public lastPage: number = 0;

    public ngOnChanges(changes: {[key: string]: SimpleChange}): any {
        this.onPageChangeSubscriber(this.table.getPage());
        this.table.onPageChange.subscribe(this.onPageChangeSubscriber);
    }

    public setPage(pageNumber: number): void {
        this.table.setPage(pageNumber, this.rowsOnPage);
    }

    public setRowsOnPage(rowsOnPage: number): void {
        this.table.setPage(this.activePage, rowsOnPage);
    }

    private onPageChangeSubscriber = (event: PageEvent)=> {
        this.activePage = event.activePage;
        this.rowsOnPage = event.rowsOnPage;
        this.dataLength = event.dataLength;
        this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
    };
}