// work

module.exports = {
    'POST /work': async (ctx, next) => {
        await next();
        const fs = require('fs');
        const path = require('path');

        var num = ctx.request.body.num;
        var items = fs.readdirSync(path.normalize(__dirname + "/../pictures"));

        var sex = ctx.request.body.sex,
            eye_size = ctx.request.body.eye_size,
            eyelid = ctx.request.body.eyelid,
            ear_size = ctx.request.body.ear_size,
            mouth_size = ctx.request.body.mouth_size,
            nose_height = ctx.request.body.nose_height,
            nose_length = ctx.request.body.nose_length,
            face = ctx.request.body.face,
            hair_length = ctx.request.body.hair_length,
            hair_type = ctx.request.body.hair_type,
            hair_color = ctx.request.body.hair_color,
            skin_color = ctx.request.body.skin_color;
        
        var vector = '[' + sex + ', ' + eye_size + ', ' + eyelid + ', ' + ear_size + ', ' + mouth_size + ', ' + nose_height + ', ' + nose_length + ', ' + face + ', ' + hair_length + ', ' + hair_type + ', ' + hair_color + ', ' + skin_color  + ']';
        var data = items[num]  + '\t' + vector  + '\n';
        console.log(data);

        fs.appendFile(path.normalize(__dirname + "/../output/result"), data, (err) => {
            if ( err ) {
                throw err;
            }
            console.log('append data successfully');
        } )

        num ++;
        ctx.render('index.html', {num: num, src: items[num], display: 'none'});
    }
};