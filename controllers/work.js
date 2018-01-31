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
        
        var sexW = sex==0 ? '男性' : '女性';
        var person = sex==0 ? '他' : '她';
        var eye_sizeW = eye_size==0 ? '大眼睛' : '小眼睛';
        var eyelidW = eyelid==0 ? '单眼皮' : '双眼皮';
        var ear_sizeW = ear_size==0 ? '大' : '小';
        var mouth_sizeW = mouth_size==0 ? '大' : '小';
        var nose_heightW = nose_height==0 ? '高' : '扁';
        var nose_lengthW = nose_length==0 ? '长' : '短';
        if ( face==0 ) {
            var faceW = '国字脸';
        } else if ( face==1 ) {
            var faceW = '瓜子脸';
        } else if ( face==1 ) {
            var faceW = '鹅蛋脸';
        }
        var hair_lengthW = hair_length==0 ? '长' : '短';
        var hair_typeW = hair_type==0 ? '卷' : '直';
        if ( hair_color==0 ) {
            var hair_colorW = '黑';
        } else if ( hair_color==1 ) {
            var hair_colorW = '棕';
        } else if ( hair_color==2 ) {
            var hair_colorW = '金';
        } else if ( hair_color==3 ) {
            var hair_colorW = '蓝';
        } else if ( hair_color==4 ) {
            var hair_colorW = '绿';
        } else if ( hair_color==5 ) {
            var hair_colorW = '白';
        } else if ( hair_color==6 ) {
            var hair_colorW = '黄';
        } else if ( hair_color==7 ) {
            var hair_colorW = '红';
        }

        if ( skin_color==0 ) {
            var skin_colorW = '超白';
        } else if ( skin_color==1 ) {
            var skin_colorW = '比较白';
        } else if ( skin_color==2 ) {
            var skin_colorW = '正常';
        } else if ( skin_color==3 ) {
            var skin_colorW = '略黑';
        } else if ( skin_color==4 ) {
            var skin_colorW = '比较黑';
        }

        // 他|她是一名男性（女性），有着一双大眼睛（小眼睛），单眼皮（双眼皮），
        // 他|她的耳朵比较大（小），他|她的嘴巴也比较大（小），他|她的鼻子又高（扁）又长（短），
        // 他|她有着一张国字脸|瓜子脸|鹅蛋脸，他|她有着一头长发|短发，而且是直的|卷的，头发的颜色是黑色|棕色|金色|蓝色|绿色|白色|黄色|红色的，
        // 他|她的皮肤超白|比较白|正常|略黑|比较黑。
        
        var data = items[num]  + ':' +
                    person + '是一名' + sexW + '，有着一双' + eye_sizeW +'，' + eyelidW + '，' +
                    person + '的耳朵比较' + ear_sizeW + '，'+ person +'的嘴巴比较' + mouth_sizeW + '，' + 
                    person + '的鼻子又' + nose_heightW + '又' + nose_lengthW + '，' +
                    person + '有着一张' + faceW + '，' + person + '有着一头' + hair_lengthW + '发，而且是' +
                    hair_typeW + '的，头发的颜色是' + hair_colorW + '色的，' +
                    person + '的皮肤' + skin_colorW + '。\n';
        console.log(data);

        fs.appendFile(path.normalize(__dirname + "/../output/result"), data, (err) => {
            if ( err ) {
                throw err;
            }
            console.log('append data successfully');
        } )

        num ++;
        fs.writeFileSync(path.normalize(__dirname + '/../output/middle'), num);
        ctx.render('index.html', {num: num, src: items[num], display: 'none'});
    }
};