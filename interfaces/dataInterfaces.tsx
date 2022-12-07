export type DataResults = {
  count: number;
  next: string;
  previous: null | string;
  results: Array<ServerCharacterObject>;
};

export type CharacterObject = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

interface ServerCharacterObject extends CharacterObject {
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}
