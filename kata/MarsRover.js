class MarsRover {
    coordX = 1;                 // 1 to 5
    coordY = 1;                 // 1 to 5
    direction = 'N';            // N,S,E,W
    commandsArrayCharac = [];   // f,b,r,l
    move([...commands]){
        // console.log('letters ',commands)

        this.commandsArrayCharac = commands;

        this.executeCommands();
        
        console.log('result ',[this.coordX,this.coordY,this.direction])
        return [this.coordX,this.coordY,this.direction];
    }

    executeCommands(){
        for (let letter of this.commandsArrayCharac){
            // console.log('result ',[this.coordX,this.coordY,this.direction])
            this.advance(letter);
            this.handleEdges();
            this.turn(letter);
        }
    }
    advance(letter){
        const forward = letter === 'f' ? true : false;
        const backward = letter === 'b' ? true : false;
        
        let value = 0;
        if (forward){
            value = 1;
        } 
        if (backward){
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
        if (this.coordX === 6){
            this.coordX = 1;
        }
        if (this.coordY === 6){
            this.coordY = 1;
        }
    }
    turn(letter){
        const turnRight = letter === 'r' ? true : false;
        const turnLeft = letter === 'l' ? true : false;
        
        const directionsR = ['N','E','S','W','N'];
        if (turnRight){
            const index = directionsR.findIndex(direction => direction === this.direction);
            this.direction = directionsR[index + 1];
        }
        if (turnLeft){
            const index = directionsR.lastIndexOf(this.direction);
            this.direction = directionsR[index - 1];
        }
    }

}

module.exports = MarsRover;