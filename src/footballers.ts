import { Difficulty, Club } from "./enums";
import { CLUBS } from "./clubs/index";

export interface Footballer {
  id: number;
  name: string;
  clubs: Club[];
  difficulty: Difficulty;
  position: string;
  nationality: string;
}

export const FOOTBALLERS: Footballer[] = [
  // Easy - Famous players with well-known clubs
  {
    id: 1,
    name: "Lionel Messi",
    clubs: [
      CLUBS.find((club) => club.name === "Barcelona")!,
      CLUBS.find((club) => club.name === "Paris Saint-Germain")!,
      CLUBS.find((club) => club.name === "Inter Miami")!,
    ],
    difficulty: Difficulty.EASY,
    position: "Forward",
    nationality: "Argentina",
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    clubs: [
      CLUBS.find((club) => club.name === "Sporting CP")!,
      CLUBS.find((club) => club.name === "Manchester United")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
      CLUBS.find((club) => club.name === "Juventus")!,
      CLUBS.find((club) => club.name === "Al-Nassr")!,
    ],
    difficulty: Difficulty.EASY,
    position: "Forward",
    nationality: "Portugal",
  },
  {
    id: 3,
    name: "Kevin Keegan",
    clubs: [
      CLUBS.find((club) => club.name === "Scunthorpe United")!,
      CLUBS.find((club) => club.name === "Liverpool")!,
      CLUBS.find((club) => club.name === "Hamburg")!,
      CLUBS.find((club) => club.name === "Southampton")!,
      CLUBS.find((club) => club.name === "Newcastle United")!,
    ],
    difficulty: Difficulty.EASY,
    position: "Forward",
    nationality: "England",
  },
  {
    id: 4,
    name: "David Beckham",
    clubs: [
      CLUBS.find((club) => club.name === "Preston North End")!,
      CLUBS.find((club) => club.name === "Manchester United")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
      CLUBS.find((club) => club.name === "LA Galaxy")!,
      CLUBS.find((club) => club.name === "AC Milan")!,
      CLUBS.find((club) => club.name === "Paris Saint-Germain")!,
    ],
    difficulty: Difficulty.EASY,
    position: "Midfielder",
    nationality: "England",
  },
  {
    id: 5,
    name: "Thierry Henry",
    clubs: [
      CLUBS.find((club) => club.name === "Monaco")!,
      CLUBS.find((club) => club.name === "Juventus")!,
      CLUBS.find((club) => club.name === "Arsenal")!,
      CLUBS.find((club) => club.name === "Barcelona")!,
      CLUBS.find((club) => club.name === "New York Red Bulls")!,
    ],
    difficulty: Difficulty.EASY,
    position: "Forward",
    nationality: "France",
  },

  // Medium - Popular players with some obscure clubs
  {
    id: 6,
    name: "Zlatan Ibrahimović",
    clubs: [
      CLUBS.find((club) => club.name === "Malmö FF")!,
      CLUBS.find((club) => club.name === "Ajax")!,
      CLUBS.find((club) => club.name === "Juventus")!,
      CLUBS.find((club) => club.name === "Inter Milan")!,
      CLUBS.find((club) => club.name === "Barcelona")!,
      CLUBS.find((club) => club.name === "AC Milan")!,
      CLUBS.find((club) => club.name === "Paris Saint-Germain")!,
      CLUBS.find((club) => club.name === "Manchester United")!,
      CLUBS.find((club) => club.name === "LA Galaxy")!,
    ],
    difficulty: Difficulty.MEDIUM,
    position: "Forward",
    nationality: "Sweden",
  },
  {
    id: 7,
    name: "Gareth Bale",
    clubs: [
      CLUBS.find((club) => club.name === "Southampton")!,
      CLUBS.find((club) => club.name === "Tottenham Hotspur")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
      CLUBS.find((club) => club.name === "Los Angeles FC")!,
    ],
    difficulty: Difficulty.MEDIUM,
    position: "Winger",
    nationality: "Wales",
  },
  {
    id: 8,
    name: "Luka Modrić",
    clubs: [
      CLUBS.find((club) => club.name === "Dinamo Zagreb")!,
      CLUBS.find((club) => club.name === "Tottenham Hotspur")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
    ],
    difficulty: Difficulty.MEDIUM,
    position: "Midfielder",
    nationality: "Croatia",
  },
  {
    id: 9,
    name: "Sergio Agüero",
    clubs: [
      CLUBS.find((club) => club.name === "Independiente")!,
      CLUBS.find((club) => club.name === "Atlético Madrid")!,
      CLUBS.find((club) => club.name === "Manchester City")!,
      CLUBS.find((club) => club.name === "Barcelona")!,
    ],
    difficulty: Difficulty.MEDIUM,
    position: "Forward",
    nationality: "Argentina",
  },
  {
    id: 10,
    name: "Eden Hazard",
    clubs: [
      CLUBS.find((club) => club.name === "Lille")!,
      CLUBS.find((club) => club.name === "Chelsea")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
    ],
    difficulty: Difficulty.MEDIUM,
    position: "Winger",
    nationality: "Belgium",
  },

  // Hard - Lesser-known players and obscure clubs
  {
    id: 11,
    name: "Javier Zanetti",
    clubs: [
      CLUBS.find((club) => club.name === "Talleres")!,
      CLUBS.find((club) => club.name === "Banfield")!,
      CLUBS.find((club) => club.name === "Inter Milan")!,
    ],
    difficulty: Difficulty.HARD,
    position: "Defender/Midfielder",
    nationality: "Argentina",
  },
  {
    id: 12,
    name: "Roberto Carlos",
    clubs: [
      CLUBS.find((club) => club.name === "Palmeiras")!,
      CLUBS.find((club) => club.name === "Inter Milan")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
      CLUBS.find((club) => club.name === "Fenerbahçe")!,
      CLUBS.find((club) => club.name === "Corinthians")!,
    ],
    difficulty: Difficulty.HARD,
    position: "Defender",
    nationality: "Brazil",
  },
  {
    id: 13,
    name: "Claude Makélélé",
    clubs: [
      CLUBS.find((club) => club.name === "Nantes")!,
      CLUBS.find((club) => club.name === "Marseille")!,
      CLUBS.find((club) => club.name === "Celta Vigo")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
      CLUBS.find((club) => club.name === "Chelsea")!,
      CLUBS.find((club) => club.name === "Paris Saint-Germain")!,
    ],
    difficulty: Difficulty.HARD,
    position: "Midfielder",
    nationality: "France",
  },
  {
    id: 14,
    name: "Fabio Cannavaro",
    clubs: [
      CLUBS.find((club) => club.name === "Napoli")!,
      CLUBS.find((club) => club.name === "Inter Milan")!,
      CLUBS.find((club) => club.name === "Juventus")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
      CLUBS.find((club) => club.name === "Al-Ahli")!,
      CLUBS.find((club) => club.name === "Al-Nassr")!,
    ],
    difficulty: Difficulty.HARD,
    position: "Defender",
    nationality: "Italy",
  },

  // Very Hard - Very obscure footballers and unknown clubs
  {
    id: 15,
    name: "Hidetoshi Nakata",
    clubs: [
      CLUBS.find((club) => club.name === "Roma")!,
      CLUBS.find((club) => club.name === "Bologna")!,
      CLUBS.find((club) => club.name === "Fiorentina")!,
      CLUBS.find((club) => club.name === "Bolton Wanderers")!,
    ],
    difficulty: Difficulty.VERY_HARD,
    position: "Midfielder",
    nationality: "Japan",
  },
  {
    id: 16,
    name: "Jay-Jay Okocha",
    clubs: [
      CLUBS.find((club) => club.name === "Eintracht Frankfurt")!,
      CLUBS.find((club) => club.name === "Fenerbahçe")!,
      CLUBS.find((club) => club.name === "Paris Saint-Germain")!,
      CLUBS.find((club) => club.name === "Bolton Wanderers")!,
      CLUBS.find((club) => club.name === "Hull City")!,
    ],
    difficulty: Difficulty.VERY_HARD,
    position: "Midfielder",
    nationality: "Nigeria",
  },
  {
    id: 17,
    name: "Gheorghe Hagi",
    clubs: [
      CLUBS.find((club) => club.name === "Steaua Bucharest")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
      CLUBS.find((club) => club.name === "Barcelona")!,
      CLUBS.find((club) => club.name === "Galatasaray")!,
    ],
    difficulty: Difficulty.VERY_HARD,
    position: "Midfielder",
    nationality: "Romania",
  },
  {
    id: 18,
    name: "Davor Šuker",
    clubs: [
      CLUBS.find((club) => club.name === "Osijek")!,
      CLUBS.find((club) => club.name === "Dinamo Zagreb")!,
      CLUBS.find((club) => club.name === "Sevilla")!,
      CLUBS.find((club) => club.name === "Real Madrid")!,
      CLUBS.find((club) => club.name === "Arsenal")!,
      CLUBS.find((club) => club.name === "West Ham United")!,
    ],
    difficulty: Difficulty.VERY_HARD,
    position: "Forward",
    nationality: "Croatia",
  },
  {
    id: 19,
    name: "Hristo Stoichkov",
    clubs: [
      CLUBS.find((club) => club.name === "CSKA Sofia")!,
      CLUBS.find((club) => club.name === "Barcelona")!,
      CLUBS.find((club) => club.name === "Al-Nassr")!,
      CLUBS.find((club) => club.name === "Kashiwa Reysol")!,
      CLUBS.find((club) => club.name === "Chicago Fire")!,
      CLUBS.find((club) => club.name === "DC United")!,
    ],
    difficulty: Difficulty.VERY_HARD,
    position: "Forward",
    nationality: "Bulgaria",
  },
];
