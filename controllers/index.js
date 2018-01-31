// index

module.exports = {
    'GET /': async (ctx, next) => {
        await next();
        const fs = require('fs');
        const path = require('path');
        if ( fs.existsSync(path.normalize(__dirname + '/../output/middle')) ) {
            var num = parseInt(fs.readFileSync(path.normalize(__dirname + '/../output/middle')), 10);
        } else {
            var num = 0;
        }
        var items = fs.readdirSync(path.normalize(__dirname + "/../pictures"));
        ctx.render('index.html', {num: num, src: items[num], display: 'none'});
    }
};
