const EventEmitter = require('events')
const door = new EventEmitter()

// 指定一个事件可以绑定多少函数
// Possible EventEmitter memory leak detected. 2 getName listeners added to [EventEmitter].
door.setMaxListeners(1)

//一个事件可以绑定多个函数
//事件注册-getName
door.on('getName',()=>{
   console.log('getName calls')
})

//事件注册-getName
let getNameFunc = ()=>{
   console.log('getName again calls')
}
door.on('getName',getNameFunc)

//事件注册
door.addListener('getAge',()=>{
   console.log('getAge calls')
})

//事件注册，只会被调用一次，完成后被移除
door.once('onlyOnce',()=>{
   console.log('onlyOnce calls')
})

console.log(door.listeners('getName'))
let funcList = door.listeners('getName')
funcList.forEach(element=>{
   element()
})

console.log(door.eventNames())
//触发事件
door.emit('getName')
//移除注册的指定事件
door.removeListener('getName',getNameFunc)
console.log(door.eventNames())
door.emit('getName')
//移除注册的所有事件
door.removeAllListeners('getName')
door.emit('getName')
console.log(door.eventNames())
door.emit('getAge')

//[ 'getName', 'getAge', 'onlyOnce' ]
console.log(door.eventNames())

door.emit('onlyOnce')
door.emit('onlyOnce')

//[ 'getName', 'getAge' ]
console.log(door.eventNames())
