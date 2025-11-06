# Troubleshooting

## Cannot Access Data After Installation

If you're unable to access the data after installing the package, try the following:

### 1. Rebuild the Package

If you installed from GitHub or a local path, the `dist` folder might not be included. Run:

```bash
cd node_modules/@keggy-data/data
npm install
npm run build
```

Or in your project root:

```bash
npm install @keggy-data/data --force
```

### 2. For React Native/Expo Projects

If you're using React Native or Expo, you may need to configure Metro bundler to handle this package. Add to your `metro.config.js`:

```javascript
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add this to handle the package
config.resolver.sourceExts.push("ts", "tsx");

module.exports = config;
```

### 3. Clear Cache and Reinstall

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 4. Check Import Statement

Make sure you're importing correctly:

```typescript
// Correct
import { FOOTBALLERS, CLUBS, Difficulty } from "@keggy-data/data";

// If using require
const { FOOTBALLERS, CLUBS } = require("@keggy-data/data");
```

### 5. Verify Package Installation

Check that the package is installed correctly:

```bash
ls node_modules/@keggy-data/data
```

You should see both `dist` and `src` folders.

### 6. TypeScript Configuration

If using TypeScript, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

### Still Having Issues?

1. Check the console for specific error messages
2. Verify the package version matches what you installed
3. Try importing from the source directly (if your bundler supports TypeScript):
   ```typescript
   import { FOOTBALLERS } from "@keggy-data/data/src";
   ```
