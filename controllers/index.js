// index

module.exports = {
    'GET /': async (ctx, next) => {
        await next();
        const fs = require('fs');
        const path = require('path');
        var items = fs.readdirSync(path.normalize(__dirname + "/../pictures"));
        ctx.render('index.html', {num: 0, src: items[0], display: 'none'});
    }
};
