const Buffer = require('buffer').Buffer


const buf = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f])
var str = buf.toString('utf-8')
console.log(str)

const buf2 = Buffer.from("Go To Hell!")
console.log(buf2)
console.log(buf2.toString('utf-8'))

const buf3 = Buffer.from('你好吗？')
console.log(buf3)
console.log(buf3.toString('utf-8'))

const buf4 = Buffer.alloc(3)
console.log(buf4)

const buf5 = Buffer.alloc(3, '好')
console.log(buf5)
console.log(buf5.toString('utf-8'))

// 分配过大会重复补齐
const buf6 = Buffer.alloc(10, 'hello')
console.log(buf6)
console.log(buf6.toString('utf-8'))

// const buf6 = Buffer.alloc(2,'好')
// console.log(buf6)
// console.log(buf6.toString('utf-8'))

//二者的区别在于
//      .alloc() 会对分配的空间进行填充，保证新分配的空间不会含有以前的数据
//      .allocUnsafe() 不会填充，所以更快。
//      .allocUnsafe() 之后立即 .fill()，其效果和 .alloc() 一样
const buf7 = Buffer.allocUnsafe(10, 'hello,boy!')
console.log(buf7)
console.log(buf7.toString())


const buf8 = Buffer.from('hello')
console.log(buf8[0])

buf8.forEach(element => {
    console.log(element)
})

for (const element of buf8) {
    console.log(element)
    // console.log(new Buffer([element]).toString())
    console.log(Buffer.from([element], 'utf-8').toString())
}

const buf9 = Buffer.from('viva')
buf9.write('小仙女！！')
console.log(buf9.toString())

const source = Buffer.from('viva')

const target = Buffer.alloc(4)
console.log(target)
// 复制
source.copy(target)
console.log(target)
console.log(target.toString())

//切片
console.log(source.slice(0,2))
console.log(source.slice(0,2).toString())
console.log(source.slice(0).toString())


console.log('--------------')


//切片是数据源的数据引用，修改会影响源数据
let sourceSlice = source.slice(0,2)
console.log(sourceSlice)
sourceSlice[0] = 't'
console.log(sourceSlice)
console.log(source)
