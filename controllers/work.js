// work

module.exports = {
    'POST /work': async (ctx, next) => {
        await next();
        num ++;
        const fs = require('fs');
        const path = require('path');
        var dirname = path.dirname(__dirname + "/../pictures");
        console.log(`dirname: ${dirname}`);
        var items = fs.readdirSync(dirname);
        ctx.render('index.html', {dirname: dirname, num: num, src: items[num]});
        // ctx.render('work.html', {dirname: dirname, num: num});
    }
};