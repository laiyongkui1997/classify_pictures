// index

module.exports = {
    'GET /': async (ctx, next) => {
        await next();
        ctx.render('index.html');
    }
};
