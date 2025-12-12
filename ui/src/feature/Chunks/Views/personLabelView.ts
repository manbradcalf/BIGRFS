export const PERSON_LABEL_PROPERTIES = [  { key: "name", type: "String" },
  { key: "imdbId", type: "String" },
  { key: "tmdbId", type: "String" },
  { key: "poster", type: "String" },
  { key: "born", type: "Date" },
  { key: "died", type: "Date" },
  { key: "bornIn", type: "String" },
  { key: "bio", type: "String" },
  { key: "url", type: "String" },];
export interface PersonProperties {
  name: string;
  imdbId: string;
  tmdbId: string;
  poster: string;
  born: string;
  died: string;
  bornIn: string;
  bio: string;
  url: string;
}