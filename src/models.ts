export type FilmModel = {
  id: string;
  title: string;
  people: [string];
}

export type PeopleModel = {
  id: string;
  name: string;
  eyeColor: string;
  films: [string];
}