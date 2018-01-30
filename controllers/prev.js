// previous

module.exports = {
    'GET /prev': async (ctx, next) => {
        await next();
        let num = ctx.request.body.num;
        const fs = require('fs');
        const path = require('path');
        var data = fs.readFileSync(path.normalize(__dirname + '/../output/result', 'utf-8'));
        var dataArr = data.split('\n');
        var line = dataArr[num];

        var src = line.split('\t')[0];
        // var 

        ctx.render('work.html', {dir: dirname, num: num});
    }
};