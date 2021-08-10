import { Logger } from 'winston'

interface Global {
    logger: Logger
}

declare global {
    var logger: Global['logger']
}
