# Keggy Data

Open source football data repository for the [king-kev](https://github.com/Daniel-Cross/king-kev) app. This repository contains all the clubs, footballers, and game data that can be contributed to by the community.

## Installation

```bash
npm install @keggy-data/data
```

Or if using from GitHub directly:

```bash
npm install github:Daniel-Cross/keggy-data
```

## Usage

```typescript
import {
  FOOTBALLERS,
  CLUBS,
  Difficulty,
  Country,
  type Footballer,
  type Club,
} from "@keggy-data/data";

// Access all footballers
const allFootballers = FOOTBALLERS;

// Access all clubs
const allClubs = CLUBS;

// Filter by difficulty
const easyFootballers = FOOTBALLERS.filter(
  (f) => f.difficulty === Difficulty.EASY
);

// Filter clubs by country
const englishClubs = CLUBS.filter((c) => c.country === Country.ENGLAND);
```

## Data Structure

### Footballers

Each footballer contains:

- `id`: Unique identifier
- `name`: Player name
- `clubs`: Array of clubs the player has played for
- `difficulty`: Difficulty level (EASY, MEDIUM, HARD, VERY_HARD)
- `position`: Player position
- `nationality`: Player nationality

### Clubs

Each club contains:

- `name`: Club name
- `country`: Country enum value

## Contributing

This is an open source data repository! Feel free to:

- Add new footballers
- Add new clubs
- Fix data errors
- Suggest improvements

## Development

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build
```
