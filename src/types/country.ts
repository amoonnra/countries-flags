import { Region } from "./regions"

type Corrency = {
   code: string
   name: string
   symbol: string
}

type Language = {
   iso639_1: string
   iso639_2: string
   name: string
   nativeName: string
}
type InfoItem = {
   title: string
   description: string
}

export interface Country {
   name: string
   nativeName: string
   flag: string
   region: Region
   subregion: string
   capital: string
   population: number
   topLevelDomain: string[]
   borders: string[]
   currencies: Corrency[]
   languages: Language[]
}

export type CountryInfo = {
   img: string
   name: string
   info: InfoItem[]
}
