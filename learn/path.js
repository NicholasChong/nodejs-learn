const path = require("learn/path")


//截取字符串中最后一截路径，第二个参数可以用于提出文件后缀
//3
console.log(path.basename('./1/2/3'))
//temp.txt
console.log(path.basename('./1/2/3/temp.txt'))
//temp 过滤 .txt
console.log(path.basename('./1/2/3/temp.txt', '.txt'))
//temp.txt
console.log(path.basename('./1/2/3/temp.txt', '.js'))


//截取路径的目录部分
// ./1/2
console.log(path.dirname('./1/2/3'))
// ./1/2/3
console.log(path.dirname('./1/2/3/temp.txt'))
// .(当前目录)
console.log(path.dirname('A.txt'))


//截取文件后缀
// 空
console.log(path.extname('./1/2/3'))
// .txt
console.log(path.extname('./1/2/3/temp.txt'))
// .js
console.log(path.extname('a.js'))


//判断当前路径是否为绝对路径
// false
console.log(path.isAbsolute('./1/2/3'))
// true
console.log(path.isAbsolute('/a.js'))


//连接传入的多个路径
// 1/2/3/temp.txt
console.log(path.join('./1', '2/3', 'temp.txt'))
// 1/2/3/temp.txt
console.log(path.join('./1', '2/3', '/temp.txt'))


//如果路径有错误，可以做一定的矫正
// ./1/./2//3   ->     1/2/3
console.log(path.normalize('./1/./2//3'))


//将传入的路径解析为对象
//{
//   root: '',
//   dir: './1/2/3',
//   base: 'temp.txt',
//   ext: '.txt',
//   name: 'temp'
// }
console.log(path.parse('./1/2/3/temp.txt'))
// { root: '', dir: './1/2', base: '3', ext: '', name: '3' }
console.log(path.parse('./1/2/3'))


//参数二相对于参数一的相对路径
// 2/3/temp.txt
console.log(path.relative('./1', './1/2/3/temp.txt'))

//返回传入的文件的绝对路径
// /Users/viva/Documents/local-work/nodejs-learn/1/2/3/temp.txt
console.log(path.resolve('./1/2/3/temp.txt'))
// /Users/viva/Documents/local-work/nodejs-learn/1/2/3/temp.txt1
// 不会校验文件是否存在
console.log(path.resolve('./1/2/3/temp.txt1'))
//先join，然后组装绝对路径
// /Users/viva/Documents/local-work/nodejs-learn/1/2/3/temp.txt
console.log(path.resolve('./1', '2/3', 'temp.txt'))





