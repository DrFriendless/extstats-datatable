# Table component with sorting and pagination for Angular
It is a forked version of [@abdulk1/angular-6-datatable](https://github.com/abdulk1/angular-6-datatable) with additions for use in my ExtendedStatsServerless project.

## 

## Installation

```
npm i extstats-datatable --save
```

## Usage example

AppModule.ts
```typescript
import {NgModule} from "@angular/core";
...
import {DataTableModule} from "extstats-datatable";

@NgModule({
    imports: [
        ...
        DataTableModule
    ],
    ...
})
export class AppModule {

}
```

AppComponent.html
```html
<table class="table table-striped" [mfData]="data" #mf="mfDataTable" [mfRowsOnPage]="5">
    <thead>
    <tr>
        <th style="width: 20%">
            <mfDefaultSorter by="name">Name</mfDefaultSorter>
        </th>
        <th style="width: 50%">
            <mfDefaultSorter by="email">Email</mfDefaultSorter>
        </th>
        <th style="width: 10%">
            <mfDefaultSorter by="age">Age</mfDefaultSorter>
        </th>
        <th style="width: 20%">
            <mfDefaultSorter by="city">City</mfDefaultSorter>
        </th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of mf.data">
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td class="text-right">{{item.age}}</td>
        <td>{{item.city | uppercase}}</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td colspan="4">
            <mfBootstrapPaginator [rowsOnPageSet]="[5,10,25]"></mfBootstrapPaginator>
        </td>
    </tr>
    </tfoot>
</table>
```

```html
  <div class="extstats-table-block">
    <mfTableController [table]="favouritesTable" [searchColumn]="'gameName'" [placeholder]="'game'"></mfTableController>
    <table class="table table-striped extstats-table" [mfData]="rows" #favouritesTable="mfDataTable" [mfRowsOnPage]="30"
           [mfSortBy]="'fhm'" [mfSortOrder]="'desc'">
      <thead mfHead [columns]="columns"></thead>
      <tbody mfBody [columns]="columns"></tbody>
    </table>
  </div>
```

## API

### `mfData` directive

 - selector: `table[mfData]`
 - exportAs: `mfDataTable`
 - inputs
   - `mfData: any[]` - array of data to display in table
   - `mfRowsOnPage: number` - number of rows should be displayed on page (default: 1000)
   - `mfActivePage: number` - page number (default: 1)
   - `mfSortBy: any` - sort by parameter
   - `mfSortOrder: string` - sort order parameter, "asc" or "desc"
 - outputs
   - `mfSortByChange: any` - sort by parameter
   - `mfSortOrderChange: any` - sort order parameter
 
### `mfDefaultSorter` component

 - selector: `mfDefaultSorter`
 - inputs
   - `by: any` - specify how to sort data (argument for lodash function [_.sortBy ](https://lodash.com/docs#sortBy))
 
### `mfTableController` component
The mfTableController component replaces the paginator with a more constrained style.
On the left is the page chooser, on the right is the page size chooser, and optionally in the centre is a search box.
The search box is intended for really large tables where there's one obvious field to search on.

### `Column<R>` class
The Column class defines a column header and also the functions required to turn a row object of type R into data values.
Columns are used to allow mfHead and mfBody to generate the head and body of the table.

### `mfHead` component
The mfHead component generates a standard table header from an array of columns.
mfHead is not required - some other thead can be used, or it can be omitted entirely.
```html
<thead mfHead [columns]="columns"></thead>
```

### `mfBody` component 
The mfBody component generates a standard table body from an array of columns and the mfData of the containing table.
It simply iterates over the visible rows and applies the functions from the Column object to the row data to get
values for the cells.
mfBody is not required - some other tbody can be used, or it can be omitted entirely.
```html
<tbody mfBody [columns]="columns"></tbody>
```
