const { createLogger, SimpleLogger } = require('./index.js');

console.log('Testing Simple Console Logger\n');
console.log('=' .repeat(50));

console.log('\n1. Testing logger with prefix "TestApp":');
const logger = createLogger('TestApp');
logger.log('Regular log message');
logger.info('Information message');
logger.warn('Warning message');
logger.error('Error message');
logger.success('Success message');

console.log('\n2. Testing logger without prefix:');
const simpleLogger = new SimpleLogger();
simpleLogger.log('Message without prefix');
simpleLogger.info('Info without prefix');

console.log('\n3. Testing logger with custom prefix "Module":');
const customLogger = new SimpleLogger('Module');
customLogger.log('Custom prefix message');
customLogger.warn('Custom prefix warning');

console.log('\n4. Testing with multiple arguments:');
logger.log('Multiple', 'arguments', { test: true }, [1, 2, 3]);

console.log('\n' + '=' .repeat(50));
console.log('All tests completed successfully!');