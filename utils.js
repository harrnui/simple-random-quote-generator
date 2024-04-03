function randomNumberGenerator(array){

    let randomNum = Math.floor(Math.random()*array.length)

    return randomNum
}



module.exports = {randomNumberGenerator}