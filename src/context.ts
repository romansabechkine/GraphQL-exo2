import { GibliAPI } from "./datasources/GibliAPI"

export type DataSourceContext = {
  dataSources: {
    gibliAPI: GibliAPI
  }
}