// work

function getPicture(path, num) {
    
}

module.exports = {
    'POST /work': async (ctx, next) => {
        await next();
        let dirname = ctx.request.body.dirname,
            num = ctx.request.body.num || 0;
        num ++;
        console.log(`dirname: ${dirname}`);
        const fs = require('fs');
        const 
        var src = null;
        var items = fs.readdirSync(dirname);
        console.log(`src: ${src}`);
        ctx.render('work.html', {dirname: dirname, num: num, src: items[num]});
        // ctx.render('work.html', {dirname: dirname, num: num});
    }
};