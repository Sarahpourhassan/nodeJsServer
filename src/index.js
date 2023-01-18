const express = require('express');
const app = express();
const port = 3000;
const log4js = require('log4js');
log4js.configure({
    appenders: {app: {type: "file", filename: "logs.log"}},
    categories: {default: {appenders: ["app"], level: "info"}},
});
const logger = log4js.getLogger('app');

app.use((req, res, next) => {
    logger.info(`[${req.method}]`, req.url, req.query);
    next();
})
app.listen(port, () => {
    console.log(`listen port ${port}`);
});

//Hello
app.get('/hello', (req, res) => {
    if (req.query.name) {
        const name = req.query.name;
        const result = name.replace(/([A-Z])/g, " $1");
        const finalName = result.charAt(0).toUpperCase() + result.slice(1);
        res.send('Hello ' + finalName)
    } else {
        res.send('Hello Stranger!');
    }
    res.statusCode = 200;
});

//Author
app.get('/author', (req, res) => {
    res.statusCode = 200;
    res.send('Sarah Zare');
});

