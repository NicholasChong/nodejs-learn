const res = require("express/lib/response")

var promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve()
    },500)
})

console.log(promise) 

setTimeout(() => {
    console.log(promise) 
},1000)

(function(){
    var promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('haha')
        },500)
    }).then(res=>{
        console.log('res:',res)
    })
    
    console.log(promise) 
    
    setTimeout(() => {
        console.log(promise) 
    },800)
})()

(function(){
    var promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            reject(new Error())
        },500)
    }).then(res=>{
        console.log('res:',res)
    }).catch((err=>{
        console.log('err:',err)
    }))
    
    console.log(promise) 
    
    setTimeout(() => {
        console.log(promise) 
    },800)
})()