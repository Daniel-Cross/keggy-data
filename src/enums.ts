export enum QuoteType {
  QUOTE = "quote",
  IMAGE = "image",
}

export enum IconName {
  HEART_FILLED = "heart",
  HEART_OUTLINE = "heart-outline",
  SHARE_OUTLINE = "share-outline",
}

export enum Color {
  HEART_RED = "#fb3958",
  WHITE = "white",
  GRADIENT_START = "#FB5FA1",
  GRADIENT_END = "#F4AA60",
}

export enum ImageSize {
  ICON_SIZE = 30,
  IMAGE_WIDTH = 380,
}

export enum Layout {
  FLEX_GROW = "flexGrow",
  CENTER = "center",
  ROW = "row",
}

export enum GameId {
  WHO_SAID_IT = "who-said-it",
  GUESS_CLUBS = "guess-clubs",
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
  VERY_HARD = "very-hard",
}

export enum Country {
  ENGLAND = "England",
  SPAIN = "Spain",
  GERMANY = "Germany",
  ITALY = "Italy",
  FRANCE = "France",
  NETHERLANDS = "Netherlands",
  PORTUGAL = "Portugal",
  BELGIUM = "Belgium",
  TURKEY = "Turkey",
  RUSSIA = "Russia",
  UKRAINE = "Ukraine",
  SCOTLAND = "Scotland",
  GREECE = "Greece",
  CROATIA = "Croatia",
  SERBIA = "Serbia",
  CZECH_REPUBLIC = "Czech Republic",
  AUSTRIA = "Austria",
  SWITZERLAND = "Switzerland",
  NORWAY = "Norway",
  SWEDEN = "Sweden",
  DENMARK = "Denmark",
  POLAND = "Poland",
  ROMANIA = "Romania",
  BULGARIA = "Bulgaria",
  USA = "USA",
  CANADA = "Canada",
  MEXICO = "Mexico",
  SAUDI_ARABIA = "Saudi Arabia",
  CHINA = "China",
  SOUTH_KOREA = "South Korea",
  JAPAN = "Japan",
  BRAZIL = "Brazil",
  ARGENTINA = "Argentina",
}

export interface Club {
  name: string;
  country: Country;
}
