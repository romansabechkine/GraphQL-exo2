import { RESTDataSource } from "@apollo/datasource-rest";
import { FilmModel, PeopleModel } from "../models.js";

export class GibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev";

  getFilms() {
    return this.get<FilmModel[]>('films')
  }

  getPeople() {
    return this.get<PeopleModel[]>(`people`)
  }
}