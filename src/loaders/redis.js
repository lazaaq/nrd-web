const Redis = require('ioredis')
const { REDIS_PORT, REDIS_HOST, REDIS_PASS } = require('./../configs')

const redis = Redis.createClient({
    port: REDIS_PORT,
    host: REDIS_HOST,
    password: REDIS_PASS
})

module.exports = {
    redis
}