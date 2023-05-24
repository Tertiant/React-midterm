export interface IBook {
    id: number;
    name: string;
    author: string;
    coAuthor?: string;
    coverImg: string;
    sequels?: string[];
    rating: number;
  };