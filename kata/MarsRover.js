class MarsRover {
    coordX = 1;                 // 1 to 5
    coordY = 1;                 // 1 to 5
    nextCoordX = 1;                 // 1 to 5
    nextCoordY = 1;                 // 1 to 5
    direction = 'N';            // N,S,E,W
    commandsArrayCharac = [];   // f,b,r,l
    obstaclesCoordArray = [];
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
            this.calculNextCoord(letter);
            this.handleEdges();
            this.advance();
            this.turn(letter);
        }
    }
    calculNextCoord(letter){
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
            this.nextCoordY += value;
        }
        if (this.direction === 'E'){
            this.nextCoordX += value;
        }
        if (this.direction === 'S'){
            this.nextCoordY -= value;
        }
        if (this.direction === 'W'){
            this.nextCoordX -= value;
        }

    }
    advance(){
        this.coordX = this.nextCoordX;
        this.coordY = this.nextCoordY;
    }
    handleEdges(){
        if (this.nextCoordX === 0){
            this.nextCoordX = 5;
        }
        if (this.nextCoordY === 0){
            this.nextCoordY = 5;
        }
        if (this.nextCoordX === 6){
            this.nextCoordX = 1;
        }
        if (this.nextCoordY === 6){
            this.nextCoordY = 1;
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