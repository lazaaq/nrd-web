const { PORT, IPBIND, API_HOST } = require('./configs')
const app = require('./loaders/express')

app.get('/', (req, res) => {
    res.render('./html/index.ejs')
})

app.get('/explore', (req, res) => {
    res.render('./html/explore.ejs')
})

app.get('/messages', (req, res) => {
    res.render('./html/messages.ejs')
})

app.get('/groups', (req, res) => {
    res.render('./html/groups.ejs')
})

app.get('/achievement', (req, res) => {
    res.render('./html/achievement.ejs')
})

app.get('/profile', (req, res) => {
    res.render('./html/profile.ejs')
})

app.listen({
    port: PORT,
    host: IPBIND
})