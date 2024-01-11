import { Component, OnInit } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Table } from 'primeng/table';
import { CDInterface } from 'src/interface/cd.interface';
import { PageEvent } from 'src/interface/page.interface';
import { MusicService } from 'src/service/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public data: CDInterface[] = [];
  public sortField = 'title';
  public sortOrder = 1;
  public page = 0;
  public size = 20;
  public totalCount = 0;

  constructor(private _musicService: MusicService) {}

  ngOnInit(): void {
    this.getData();
  }

  onPageChange(event: PaginatorState) {
    this.page = event.page ? event.page : this.page;
    this.size = event.rows ? event.rows : this.size;
    this.getData();
  }

  getData() {
    this._musicService.getCDS(this.page, this.size).subscribe((r) => {
      this.data = r.data;
      this.totalCount = r.page ? r.page.totalElements : 0;
    });
  }

  clear(table: Table) {
    table.clear();
  }
}
