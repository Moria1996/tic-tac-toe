let currentPlayer = "X";
function pressBox(i) {
    if (currentPlayer == "X") {
        document.getElementById("b" + i.toString()).innerText = "X"
        document.getElementById("b" + i.toString()).disabled = true
        currentPlayer = "O"
    } else {
        document.getElementById("b" + i.toString()).innerText = "O"
        document.getElementById("b" + i.toString()).disabled = true
        currentPlayer = "X"

    }
    this.isWinner()
}
function isWinner(){
    let b1 = document.getElementById("b1").innerText;
    let b2 = document.getElementById("b2").innerText;
    let b3 = document.getElementById("b3").innerText;
    let b4 = document.getElementById("b4").innerText;
    let b5 = document.getElementById("b5").innerText;
    let b6 = document.getElementById("b6").innerText;
    let b7 = document.getElementById("b7").innerText;
    let b8 = document.getElementById("b8").innerText;
    let b9 = document.getElementById("b9").innerText;
    this.isWin(b1, b2, b3)
    this.isWin(b4, b5, b6)
    this.isWin(b7, b8, b9)
    this.isWin(b1, b4, b7)
    this.isWin(b2, b5, b8)
    this.isWin(b3, b6, b9)
    this.isWin(b1, b5, b9)
    this.isWin(b3, b5, b7)
    if(!this.isWin(b1, b2, b3) && !this.isWin(b4, b5, b6) && !this.isWin(b7, b8, b9)
        && !this.isWin(b1, b4, b7) && !this.isWin(b2, b5, b8) && !this.isWin(b3, b6, b9)
        && !this.isWin(b1, b5, b9) && !this.isWin(b3, b5, b7) && isFull()){
        let res = document.getElementById("result")
        res.innerHTML = "No one won! it's a draw!"
    }
}
function isWin(b1, b2, b3){
    let res = document.getElementById("result")
    let player = ""
    if(currentPlayer == "X"){
        player = "O"
    }else {
        player = "X"
    }
    if(b1 == b2 && b1 == b3 && b1 != ""){
        res.innerHTML = "Player " + player.toString() + " won the game"
        blockBoxes()
        return true;
    }else {
        return  false;
    }
}
function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("b" + i).innerText = " "
        document.getElementById("b" + i).disabled = false
        currentPlayer = "X"
    }
}
function blockBoxes(){
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
}
function isFull(){
    let b1 = document.getElementById("b1").innerText;
    let b2 = document.getElementById("b2").innerText;
    let b3 = document.getElementById("b3").innerText;
    let b4 = document.getElementById("b4").innerText;
    let b5 = document.getElementById("b5").innerText;
    let b6 = document.getElementById("b6").innerText;
    let b7 = document.getElementById("b7").innerText;
    let b8 = document.getElementById("b8").innerText;
    let b9 = document.getElementById("b9").innerText;
    if(b1 != "" && b2 != "" && b3 != "" && b4 != "" && b5 != "" && b6 != "" && b7 != "" && b8 != "" && b9 != ""){
        return  true;
    }else
        return false;
}
