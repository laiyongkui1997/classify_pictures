// nextpicure

module.exports = {
    'POST /next': async (ctx, next) => {
        await next();
        let dirname = ctx.request.body.dirname,
            num = ctx.request.body.num;
        ctx.render('work.html', {dir: dirname, num: num});
    }
};