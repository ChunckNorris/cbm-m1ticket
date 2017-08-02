
import { Injectable } from '@angular/core';
import { ColumnFormatter } from './column-formatter';
import { ValueGetter } from './value-getter';

@Injectable()
export class DataTableColumn {

  text: string;
  sortable: boolean;
  collapsing: boolean;
  formatter: ColumnFormatter;
  getter: ValueGetter;

  constructor(text: string,
              sortable: boolean,
              collapsing: boolean,
              formatter: ColumnFormatter,
              getter?: ValueGetter) {
    this.text = text;
    this.sortable = sortable;
    this.collapsing = collapsing;
    this.formatter = formatter;
    this.getter = getter;
  }
}


