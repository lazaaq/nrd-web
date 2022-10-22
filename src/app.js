const { PORT, IPBIND, API_HOST } = require('./configs')
const app = require('./loaders/express')

app.get('/', (req, res) => {
    res.render('./html/index.ejs');
});

app.listen({
    port: PORT,
    host: IPBIND
});