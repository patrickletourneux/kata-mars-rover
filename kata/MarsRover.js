class MarsRover {
    coordX = 1;
    coordY = 1;
    direction = 'N'; // N,S,E,W
    commandsArrayCharac = [];
    move([...commands]){
        // console.log('letters ',commands)

        this.commandsArrayCharac = commands;

        this.interpreteLetters();
        
        console.log('result ',[this.coordX,this.coordY,this.direction])
        return [this.coordX,this.coordY,this.direction];
    }

    interpreteLetters(){
        for (let letter of this.commandsArrayCharac){
            // console.log('result ',[this.coordX,this.coordY,this.direction])
            this.advance(letter);
            this.handleEdges();
            this.turn(letter);
        }
    }
    advance(letter){
        let value = 0;

        if (letter === 'f'){
            value = 1;
        } 
        if (letter === 'b'){
            value = -1;
        }

        if (this.direction === 'N'){
            this.coordY += value;
        }
        if (this.direction === 'E'){
            this.coordX += value;
        }
        if (this.direction === 'S'){
            this.coordY -= value;
        }
        if (this.direction === 'W'){
            this.coordX -= value;
        }


    }
    handleEdges(){
        if (this.coordX === 0){
            this.coordX = 5;
        }
        if (this.coordY === 0){
            this.coordY = 5;
        }
    }
    turn(letter){
        const directionsR = ['N','E','S','W','N'];

        if (letter === 'r'){
            const index = directionsR.findIndex(direction => direction === this.direction);
            this.direction = directionsR[index + 1];
        }
        if (letter === 'l'){
            const index = directionsR.lastIndexOf(this.direction);
            this.direction = directionsR[index - 1];
        }
    }

}

module.exports = MarsRover;