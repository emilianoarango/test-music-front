import { TrackInterface } from './track.interface';

export interface CDResponseInterface {
  cds: CDInterface[];
}

export interface CDInterface {
  artist: string;
  tracks: TrackInterface;
  title: string;
  year: string;
  id: string;
}
