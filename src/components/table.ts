import CarJoined from '../types/car-joined';

type StringOrNumber = string | number;

// type TableProps = {
//   title: string;
//   columns: StringOrNumber;
//   rowsData: StringOrNumber[];
// };

export default class MyTable {
  private colNames: string[];

  // private props: TableProps,
  private _htmlTable: HTMLTableElement = document.createElement('table');

  private thead: HTMLTableSectionElement = document.createElement('thead');

  private tbody: HTMLTableSectionElement = document.createElement('tbody');

  constructor(private data: CarJoined[]) {
    this.colNames = Object.keys(data[0]);
    this.initialize();
  }

  // eslint-disable-next-line class-methods-use-this
  private makeOneRow(dataRow: CarJoined): HTMLTableRowElement {
    // sukurtti tr
    const trEl = document.createElement('tr');
    // sukurti td cikle sudeti i tr
    Object.values(dataRow).forEach((rowValue: StringOrNumber) => {
      const tdEl = document.createElement('td');
      tdEl.textContent = typeof rowValue === 'string' ? rowValue : String(rowValue);
      trEl.appendChild(tdEl);
    });
    // grazinti tr
    return trEl;
  }

  private createTableBodyRows(): void {
    // sukti ciklas per data
    this.data.forEach((dataRow: CarJoined) => {
      const row: HTMLTableRowElement = this.makeOneRow(dataRow);
      this.tbody.appendChild(row);
    });
    // ciklo metu gaminti ir gauti eilutes i makeOneRow
    // gavus eilute pridet i tbody
  }

  private createTableHeader(): void {
    // sukurti table headers elementus
    const tr = document.createElement('tr');
    this.colNames.forEach((n: string) => {
      const th = document.createElement('th');
      th.textContent = n;
      tr.appendChild(th);
    });
    this.thead.appendChild(tr);
  }

  private initialize(): void {
    // sukurti table headers elementus
    this.createTableHeader();
    this.createTableBodyRows();
    this._htmlTable.append(this.thead, this.tbody);
    this._htmlTable.className = 'table table-striped';
    const row = this.makeOneRow(this.data[0]);
    console.log('row ===', row);
    // sukurti table body
    // graziti arba atvaizdtuoti table
  }

  get htmlTable(): HTMLTableElement {
    return this._htmlTable;
  }
}
