export interface showTemplate {
  id: number;
  name: string;
  image: {};
  genres: [];
  language: string;
  rating: {};
  status: string;
  summary: string;
  url: string;
  premiered: string;
}

export interface showJson extends showTemplate {
  image: {medium: string}
  rating: {average: number}
}

export interface showResponse {
  data: showTemplate[showTemplate]
}