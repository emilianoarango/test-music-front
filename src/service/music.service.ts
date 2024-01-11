import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  ApiResponseInterface,
  ResponseInterface,
} from 'src/interface/api.interface';
import { CDInterface, CDResponseInterface } from 'src/interface/cd.interface';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private cdUrl = 'http://localhost:8087/music/cds?projection=cdDetails';

  constructor(private _httpClient: HttpClient) {}

  public getCDS(
    page: number,
    size: number
  ): Observable<ResponseInterface<CDInterface[]>> {
    return this._httpClient
      .get<ApiResponseInterface<CDResponseInterface>>(this.cdUrl, {
        params: {
          page: page.toString(),
          size: size.toString(),
        },
      })
      .pipe(
        map((r: ApiResponseInterface<CDResponseInterface>) => {
          return {
            data: r._embedded.cds,
            page: r.page,
          };
        })
      );
  }
}
