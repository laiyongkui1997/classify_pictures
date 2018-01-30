// index

module.exports = {
    'GET /': async (ctx, next) => {
        await next();
        const fs = require('fs');
        const path = require('path');
        var dirname = "/pictures";
        console.log(`dirname: ${dirname}`);
        var items = fs.readdirSync(path.normalize(__dirname + "/../pictures"));
        console.log(`items: ${items[0]}`);
        ctx.render('index.html', {dirname: dirname, num: 0, src: items[0]});
    }
};
