export const MOVIE_LABEL_PROPERTIES = [  { key: "movieId", type: "String" },
  { key: "imdbId", type: "String" },
  { key: "title", type: "String" },
  { key: "tmdbId", type: "String" },
  { key: "year", type: "Long" },
  { key: "countries", type: "StringArray" },
  { key: "languages", type: "StringArray" },
  { key: "plot", type: "String" },
  { key: "imdbRating", type: "Double" },
  { key: "imdbVotes", type: "Long" },
  { key: "released", type: "String" },
  { key: "runtime", type: "Long" },
  { key: "poster", type: "String" },
  { key: "revenue", type: "Long" },
  { key: "budget", type: "Long" },
  { key: "url", type: "String" },];
export interface MovieProperties {
  movieId: string;
  imdbId: string;
  title: string;
  tmdbId: string;
  year: number;
  countries: string;
  languages: string;
  plot: string;
  imdbRating: number;
  imdbVotes: number;
  released: string;
  runtime: number;
  poster: string;
  revenue: number;
  budget: number;
  url: string;
}