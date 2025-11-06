# Contributing to Keggy Data

Thank you for your interest in contributing to Keggy Data! This repository contains the football data (clubs and footballers) used in the Keggy game.

## How to Contribute

### Adding a New Club

1. **Fork the repository** and clone it locally
2. **Find the appropriate country file** in `src/clubs/` (e.g., `england.ts`, `spain.ts`)
3. **Add your club** following the existing format:
   ```typescript
   {
     name: "Club Name",
     country: Country.ENGLAND, // Use the appropriate Country enum
   }
   ```
4. **Make sure the club is exported** in `src/clubs/index.ts`:
   - Add it to the `ALL_CLUBS` array
   - Export it in the individual country exports if needed
5. **Test locally**:
   ```bash
   npm install
   npm run build
   ```
6. **Submit a pull request** with a clear description

### Adding a New Footballer

1. **Fork the repository** and clone it locally
2. **Open `src/footballers.ts`**
3. **Add your footballer** following the existing format:
   ```typescript
   {
     id: <next available id>, // Check the highest ID and increment
     name: "Player Name",
     clubs: [
       CLUBS.find((club) => club.name === "Club Name")!,
       // Add more clubs as needed
     ],
     difficulty: Difficulty.EASY, // or MEDIUM, HARD, VERY_HARD
     position: "Forward", // e.g., Forward, Midfielder, Defender, Goalkeeper
     nationality: "Country Name",
   }
   ```
4. **Important**: Make sure all clubs referenced exist in the clubs files
5. **Test locally**:
   ```bash
   npm install
   npm run build
   ```
6. **Submit a pull request** with:
   - Clear description of the footballer
   - Verification that all clubs exist
   - Appropriate difficulty level

### Guidelines

- **Club Names**: Use the official club name (e.g., "Manchester United" not "Man Utd")
- **Player Names**: Use full name as commonly known (e.g., "Lionel Messi")
- **Difficulty Levels**:
  - **EASY**: Very famous players with well-known clubs (Messi, Ronaldo, etc.)
  - **MEDIUM**: Popular players with some obscure clubs
  - **HARD**: Lesser-known players and obscure clubs
  - **VERY_HARD**: Very obscure footballers and unknown clubs
- **Accuracy**: Please verify that the clubs and information are accurate
- **Formatting**: Follow the existing code style and formatting

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test that the package builds successfully
4. Submit a PR with a clear description
5. Be patient - PRs will be reviewed and merged by maintainers

### Questions?

If you have questions, please open an issue in the repository.

Thank you for contributing! 🎉
