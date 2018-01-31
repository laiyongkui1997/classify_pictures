# Classify Pictures

#### 准备工作
1. 下载node
[官网下载地址](https://nodejs.org/en/)  

windows下直接安装即可 
ubuntu下直接命令行安装最新即可  
```
sudo apt-get install node
```

2. 在github上拉取项目
项目地址：[https://github.com/Ison-Laihus/classify_pictures](https://github.com/Ison-Laihus/classify_pictures)  

#### 操作
1. 在项目中，增加`pictures`，`output`这两个文件夹  

2. 将要标注的图片放在`pictures`文件夹下

3. 安装node所依赖的包
执行如下命令(在项目目录下打开命令行)  
```
npm install
```

#### 运行
1. 在项目目录下打开命令行，输入如下命令运行项目
```
npm start
```
或者  
```
node app.js
```

2. 在浏览器中输入如下url进行工作
```
http://localhost:3000/
```

#### 查看结果
标注的结果是在output文件夹下的result文件中  
数据格式：  
```
[文件名]:他|她是一名男性（女性），有着一双大眼睛（小眼睛），单眼皮（双眼皮），他|她的耳朵比较大（小），他|她的嘴巴也比较大（小），他|她的鼻子又高（扁）又长（短），他|她有着一张国字脸|瓜子脸|鹅蛋脸，他|她有着一头长发|短发，而且是直的|卷的，头发的颜色是黑色|棕色|金色|蓝色|绿色|白色|黄色|红色的，他|她的皮肤超白|比较白|正常|略黑|比较黑。
```

#### 状态保存
在output文件夹中添加了一个middle文件（自动生成）  
它能够保存工作的状态，具体而言，就是关闭网页之后，已经标注的图片就不会再显示，而只是显示未标注的图片  
