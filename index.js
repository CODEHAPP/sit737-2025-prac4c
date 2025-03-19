const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// Parse JSON requests
app.use(express.json());

// Configure logging
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// **Logging middleware, placed before all routes**
app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url} from ${req.ip}`);
    next();
});

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for addition');
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    logger.info(`Addition: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for subtraction');
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    logger.info(`Subtraction: ${num1} - ${num2} = ${result}`);
    res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for multiplication');
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    logger.info(`Multiplication: ${num1} * ${num2} = ${result}`);
    res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for division');
        return res.status(400).json({ error: 'Invalid input' });
    }
    if (parseFloat(num2) === 0) {
        logger.error('Attempt to divide by zero');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    logger.info(`Division: ${num1} / ${num2} = ${result}`);
    res.json({ result });
});

// New advanced arithmetic operation: Exponentiation
app.get('/exponentiation', (req, res) => {
    const { base, exponent } = req.query;
    if (!base || !exponent || isNaN(base) || isNaN(exponent)) {
        logger.error('Invalid input for exponentiation');
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = Math.pow(parseFloat(base), parseFloat(exponent));
    logger.info(`Exponentiation: ${base} ^ ${exponent} = ${result}`);
    res.json({ result });
});

// New advanced arithmetic operation: Square Root
app.get('/sqrt', (req, res) => {
    const { number } = req.query;
    if (!number || isNaN(number) || parseFloat(number) < 0) {
        logger.error('Invalid input for square root');
        return res.status(400).json({ error: 'Invalid input or negative number' });
    }
    const result = Math.sqrt(parseFloat(number));
    logger.info(`Square Root: sqrt(${number}) = ${result}`);
    res.json({ result });
});

// New advanced arithmetic operation: Modulo
app.get('/modulo', (req, res) => {
    const { dividend, divisor } = req.query;
    if (!dividend || !divisor || isNaN(dividend) || isNaN(divisor)) {
        logger.error('Invalid input for modulo');
        return res.status(400).json({ error: 'Invalid input' });
    }
    if (parseFloat(divisor) === 0) {
        logger.error('Attempt to divide by zero in modulo');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = parseFloat(dividend) % parseFloat(divisor);
    logger.info(`Modulo: ${dividend} % ${divisor} = ${result}`);
    res.json({ result });
});

// Server listening on the port
app.listen(port, () => {
    logger.info(`Calculator microservice running at http://localhost:${port}`);
});
