import express from 'express'
import * as winston from 'winston'

const app = express()
const { PORT = '3000' } = process.env

// global variable logger
globalThis.logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console()
    ]
})
// app listening
app.listen(PORT, () => {
    logger.info(`Application is running on localhost:${PORT}`)
})
