require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    IPBIND: process.env.IPBIND,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PASS: process.env.REDIS_PASS
}
