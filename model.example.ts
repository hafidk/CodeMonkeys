interface GeoLocation {
  lat: number;
  long: number;
}

interface Propostion {
  //Info we would GET from the backend
  author: string;
  title: string;
  prompt: string;
  description: string;
  image: HTMLImageElement;
  geoLocation: GeoLocation;
  votes: number;
}

interface PropositionDraft {
  //Info we would POST to the backend
  image: HTMLImageElement;
  mask: string;
  geoLocation: any;
}
