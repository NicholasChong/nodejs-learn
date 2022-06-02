// var process = request('process')



process.openStdin().on('data', (player) => {
    player = player.toString().trim()
    console.log('你出了:', player)
    game(player)
})


// console.log(process.argv)




// var player = process.argv[process.argv.length - 1]

function game(player) {
    var random = Math.random() * 3
    let computer
    if (random < 1) {
        computer = '剪刀'
    } else if (random > 2) {
        computer = '石头'
    } else {
        computer = '包袱'
    }
    console.log('player:', player)
    console.log('computer:', computer)
    if (computer === player) {
        console.log('结局:平局')
    } else if ((computer === '剪刀' && player === '包袱')
        || (computer === '石头' && player === '剪刀')
        || (computer === '包袱' && player === '石头')
    ) {
        console.log('结局:你输了')
    } else {
        console.log('结局:你赢了')
    }
    console.log('===================')
}
