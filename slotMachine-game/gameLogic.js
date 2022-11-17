let moneyAMount  = 100
function spin(money){
    money = moneyAMount 
    
    let isWin = false

    function firstLine(){
        let firstLineElement = Math.floor(Math.random() * 6)

        if(firstLineElement == 0){
            firstLineElement = 'Chery'
        }else if (firstLineElement == 1){
            firstLineElement = 'Grape'
        }else if ( firstLineElement == 2){
            firstLineElement = 'Bar'
        }else if (firstLineElement == 3){
            firstLineElement = 'Lemon'
        }else if (firstLineElement == 4){
            firstLineElement = 'Plum'
        }else if (firstLineElement == 5){
            firstLineElement = '7'
        }

        return firstLineElement
    }

    function secondLine(){
        let secondLineElement = Math.floor(Math.random() * 6)

        if(secondLineElement == 0){
            secondLineElement = 'Chery'
        }else if (secondLineElement == 1){
            secondLineElement = 'Grape'
        }else if ( secondLineElement == 2){
            secondLineElement = 'Bar'
        }else if (secondLineElement == 3){
            secondLineElement = 'Lemon'
        }else if (secondLineElement == 4){
            secondLineElement = 'Plum'
        }else if (secondLineElement == 5){
            secondLineElement = '7'
        }

        return secondLineElement
    }

    function lastLine(){
        let lastLineElement = Math.floor(Math.random() * 6)

        if(lastLineElement == 0){
            lastLineElement = 'Chery'
        }else if (lastLineElement == 1){
            lastLineElement = 'Grape'
        }else if (lastLineElement == 2){
            lastLineElement = 'Bar'
        }else if (lastLineElement == 3){
            lastLineElement = 'Lemon'
        }else if (lastLineElement == 4){
            lastLineElement = 'Plum'
        }else if (lastLineElement == 5){
            lastLineElement = '7'
        }

        return lastLineElement
    }

    let resultFromFirstLine = firstLine()
    let resultSeconLine = secondLine()
    let resultLastLine = lastLine()
    

    if(resultFromFirstLine === resultSeconLine && resultFromFirstLine === resultLastLine){
        console.log(`${resultFromFirstLine} ${resultSeconLine} ${resultLastLine}`)
        console.log('CONGRATOLATION YOU WIN')
        console.log('YOU WIN BIG PRIZE')
        isWin = true
        money *= 5
    }else if(resultFromFirstLine === resultSeconLine && resultFromFirstLine != resultLastLine){
        console.log(`${resultFromFirstLine} ${resultSeconLine} ${resultLastLine}`)
        console.log('YOU WIN')
        console.log('YOU HAVE FIRST TWO ELEMENTS')
        isWin = true
        money *= 1.25
    }else if(resultSeconLine === resultLastLine && resultFromFirstLine != resultSeconLine){
        console.log(`${resultFromFirstLine} ${resultSeconLine} ${resultLastLine}`)
        console.log('YOU WIN')
        console.log('YOU HAVE LAST TWO ELEMENTS')
        isWin = true
        money *= 1.10
    }else if(resultFromFirstLine === resultLastLine){
        console.log(`${resultFromFirstLine} ${resultSeconLine} ${resultLastLine}`)
        console.log('YOU HAVE FIRST AND LAST ELEMENT')
        console.log('TRY AGAIN')
        isWin = true
        money *= 1
     }else{
        console.log(`${resultFromFirstLine} ${resultSeconLine} ${resultLastLine}`)
        console.log('YOU LOST')
        console.log('TRY AGAIN')
        moneyAMount = money - 2 * money
    }
    moneyAMount = moneyAMount + money

    if(isWin){
        console.log(`You win ${moneyAMount.toFixed(2)}lv.`)
        
    }else{
        console.log(`You have ${moneyAMount}lv.`)
    }

    let winBar = document.getElementById("winBarHeading")
    winBar.innerHTML = money

    let moneyBar = document.getElementById("moneyBarHeading")
    moneyBar.innerHTML = moneyAMount

}
spin(moneyAMount)
