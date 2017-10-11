class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
           this.matrix[rowIndex][columnIndex] = this.currentSymbol;
            if (this.currentSymbol == 'x') {
            this.currentSymbol = 'o'
        }
        else{
           this.currentSymbol = 'x' 
        }
        }   
        
    }
    isFinished() {
        if (this.getWinner()|| this.noMoreTurns()) {
            return true
        }
        else{
            return false
        }
    }

    getWinner() {
 for (var i = 0; i < this.matrix.length; i++) {
            var a=this.matrix[i][0]
            console.log(a)
            if (a) {
                       for (var j = 1;  j< this.matrix[i].length; j++) {
                console.log(this.matrix[i][j])
                if (a == this.matrix[i][j]) {
                    if (j == this.matrix[i].length-1) {
                        return this.matrix[i][j];
                    }
                    else{
                        a = this.matrix[i][j];
                    }           
                } 
                else{
                    break;
                }
            }
            }
     
        }
          // вертикальные строчки
               for (var i = 0; i < this.matrix.length; i++) {
                    var a=this.matrix[0][i]
                    console.log(a)
            
  if (a) {
              for (var j = 1;  j< this.matrix[i].length; j++) {

                console.log(this.matrix[j][i])
                if (a == this.matrix[j][i]) {
                    if (j == this.matrix[i].length-1) {
                        return this.matrix[j][i];
                    }
                    else{
                        a = this.matrix[j][i];
                    }           
                } 
                else{
                    break;
                }
            }
  }
        }

       //          //диагональ 1
       var a=this.matrix[0][this.matrix.length-1]
if (a) {
           for (var i = 0; i < this.matrix.length; i++) {
        if (a ==this.matrix[i][this.matrix.length-1-i]) {
            if (i == this.matrix.length-1) {
                return a
            }
            else{
                a=this.matrix[i][this.matrix.length-1-i]
            }
        }
        else{
            break;
        }
       }
}
             var a=this.matrix[0][0]
             if (a) {
                       for (var i = 0; i < this.matrix.length; i++) {
        if (a ==this.matrix[i][i]) {
            if (i == this.matrix.length-1) {
                return a
            }
            else{
                a=this.matrix[i][i]
            }
        }
        else{
            break;
        }
       }
             }

       return null;

    }

noMoreTurns() {
        for (var i = 0; i < this.matrix.length; i++) {
            for (var j = 0; j < this.matrix[i].length; j++) {
                if (!this.matrix[i][j]) {
                    return false;
                }
            }

        }
        return true;
    }

    isDraw() {
if (this.getWinner() == null && this.noMoreTurns() ){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex]) {
            return this.matrix[rowIndex][colIndex]
        }
        else{
            return null
        }
    }
}

module.exports = TicTacToe;
