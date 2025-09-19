class SimpleLogger {
  constructor(prefix = '') {
    this.prefix = prefix;
  }

  log(...args) {
    const timestamp = new Date().toISOString();
    const message = this.prefix ? `[${this.prefix}]` : '';
    console.log(`[${timestamp}]${message}`, ...args);
  }

  info(...args) {
    const timestamp = new Date().toISOString();
    const message = this.prefix ? `[${this.prefix}]` : '';
    console.info(`[${timestamp}]${message} ℹ️`, ...args);
  }

  warn(...args) {
    const timestamp = new Date().toISOString();
    const message = this.prefix ? `[${this.prefix}]` : '';
    console.warn(`[${timestamp}]${message} ⚠️`, ...args);
  }

  error(...args) {
    const timestamp = new Date().toISOString();
    const message = this.prefix ? `[${this.prefix}]` : '';
    console.error(`[${timestamp}]${message} ❌`, ...args);
  }

  success(...args) {
    const timestamp = new Date().toISOString();
    const message = this.prefix ? `[${this.prefix}]` : '';
    console.log(`[${timestamp}]${message} ✅`, ...args);
  }
}

function createLogger(prefix) {
  return new SimpleLogger(prefix);
}

module.exports = { SimpleLogger, createLogger };