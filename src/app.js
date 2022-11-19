const { PORT, IPBIND, API_HOST } = require('./configs')
const app = require('./loaders/express')

app.get('/', (req, res) => {
    res.render('./html/index.ejs')
})

app.get('/explore', (req, res) => {
    res.send('explore')
})

app.get('/messages', (req, res) => {
    res.send('messages')
})

app.get('/groups', (req, res) => {
    res.send('groups')
})

app.get('/achievement', (req, res) => {
    res.send('achievement')
})

app.get('/profile', (req, res) => {
    res.send('profile')
})

app.listen({
    port: PORT,
    host: IPBIND
})