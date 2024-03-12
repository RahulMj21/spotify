export enum SongType {
  FOR_YOU = "FOR_YOU",
  TOP_TRACKS = "TOP_TRACKS",
  FAVOURITES = "FAVOURITES",
  RECENTLY_PLAYED = "RECENTLY_PLAYED",
}

export interface ISong {
  artist: string;
  audioUrl: string;
  duration: number;
  id: string;
  photoUrl: string;
  title: string;
}

export interface IGetSongs {
  getSongs: ISong[];
}
