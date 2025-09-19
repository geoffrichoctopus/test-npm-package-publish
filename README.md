# Simple Console Logger

A lightweight console logging utility with timestamps and customizable prefixes.

## Installation

```bash
npm install @geoffrichoctopus/test-npm-package-publish
```

## Usage

```javascript
const { createLogger, SimpleLogger } = require('@geoffrichoctopus/test-npm-package-publish');

// Create a logger with a prefix
const logger = createLogger('MyApp');

// Use different log levels
logger.log('This is a regular log message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
logger.success('This is a success message');

// Create logger without prefix
const simpleLogger = new SimpleLogger();
simpleLogger.log('Message without prefix');

// Create logger with custom prefix
const customLogger = new SimpleLogger('CustomPrefix');
customLogger.log('Message with custom prefix');
```

## Features

- Automatic timestamp for all log messages
- Multiple log levels (log, info, warn, error, success)
- Optional prefix for categorizing logs
- Simple and lightweight

## Publishing to NPM

This package is automatically published to NPM when you create a new release on GitHub.

### Setup Instructions:

1. **Create an NPM account** at https://www.npmjs.com/

2. **Generate an NPM Access Token**:
   - Go to https://www.npmjs.com/settings/your-username/tokens
   - Click "Generate New Token"
   - Choose "Automation" token type
   - Copy the token

3. **Add NPM_TOKEN to GitHub Secrets**:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your NPM token

4. **Update package.json**:
   - Replace `@your-username` with your actual NPM username
   - Update the repository URLs with your GitHub username/repo

5. **Create a Release**:
   - Go to your GitHub repository
   - Click on "Releases" in the right sidebar
   - Click "Create a new release"
   - Choose a tag (e.g., v1.0.0)
   - Fill in release title and description
   - Click "Publish release"

The GitHub Actions workflow will automatically:
- Run tests
- Publish the package to NPM

## License

MIT