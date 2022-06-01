const fs = require('fs')

//同步读取
let buf = fs.readFileSync('A.txt', 'utf-8')
console.log(buf)

//异步读取
fs.readFile('A.txt', 'utf-8', (err, data) => {
    console.log('err', err)
    console.log('data', data)
})


// 同步写，文件不存在会自动创建，数据全覆盖
fs.writeFileSync('B.txt', 'Hello World!')
let data = fs.readFileSync('B.txt', 'utf-8')
console.log(data)

//异步写入，返回值只有err
fs.writeFile('B.txt', 'Hello World!', (err) => {
    console.log('err', err)
})


//同步追加写入
fs.appendFileSync('B.txt', "Hello World Again!")
let newData = fs.readFileSync('B.txt', 'utf-8')
console.log(newData)

//异步追加写入
fs.appendFile('B.txt', "Hello World Again Async!", (err) => {
    console.log('err', err)
})


//同步复制文件
fs.copyFileSync('B.txt', 'B_Copy.txt')

//异步复制文件
fs.copyFile('B.txt', 'B_Copy_Async.txt', (err) => {
    console.log('err', err)
})

// 相同目录不能创建
if (!fs.existsSync('a')) {
    fs.mkdirSync("a")
} else {
    console.log('dir a exists')
}

// 层级创建时，上层目录必须存在
if (!fs.existsSync('1/2/3')) {
    if (!fs.existsSync('1/2')) {
        if (!fs.existsSync('1')) {
            fs.mkdirSync("1")
        }
        fs.mkdirSync("1/2")
    }
    fs.mkdirSync("1/2/3")
}

//写文件
fs.writeFileSync('1/2/3/temp.txt', 'This is a temp file',)


//同步读取目录
let dirData = fs.readdirSync('1')
console.log(dirData)

//异步读取目录
fs.readdir('1', (err, data) => {
    if (!err) {
        console.log(data)
    }
})


//同步删除目录,不能删除有子目录的目录
fs.rmdirSync("a")

//异步删除目录,不能重复删除
fs.rmdir("a", err => {
    console.log(err)
})


//删除目录
fs.rmdir("1/2/3", err => {
    if (!err) {
        console.log(err.errno)
        let data = fs.readdirSync("1/2/3");
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            fs.unlinkSync("1/2/3" + element)
        }
        fs.rmdirSync("1/2/3")
    }
})


//写文件
fs.writeFileSync('1/2/3/temp.txt', 'This is a temp file',)

//删除文件
fs.unlinkSync('1/2/3/temp.txt')

//删除文件，不存在文件会报错 [Error: ENOENT: no such file or directory, unlink '1//2/3/temp.txt'] {
fs.unlink('1/2/3/temp.txt', err => {
    console.log(err)
})




