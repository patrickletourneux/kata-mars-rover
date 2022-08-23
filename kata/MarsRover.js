class MarsRover {
    coordX = 1;                 // 1 to 5
    coordY = 1;                 // 1 to 5
    nextCoordX = 1;                 // 1 to 5
    nextCoordY = 1;                 // 1 to 5
    direction = 'N';            // N,S,E,W
    commandsArrayCharac = [];   // f,b,r,l
    obstaclesCoordArray = [];
    isObstacleNextCoordinates = false;
    firstObstacleOnCommands = [];
    moveResult = [];    

    move([...commands]){
        // console.log('letters ',commands)

        this.commandsArrayCharac = commands;

        this.executeCommands();
        
        return this.moveResult;
    }

    executeCommands(){
        for (let letter of this.commandsArrayCharac){
            // console.log('result ',[this.coordX,this.coordY,this.direction])
            this.calculNextCoord(letter);
            this.handleEdges();
            this.isObstacleNextCoord();
            if (this.isObstacleNextCoordinates){ 
                this.moveResult = [this.firstObstacleOnCommands[0],this.firstObstacleOnCommands[1],'obstacle']
                break;
            }
            this.advance();
            this.turn(letter);
            this.moveResult = [this.coordX,this.coordY,this.direction];
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
    isObstacleNextCoord(){
        for (let obstacle of this.obstaclesCoordArray){
            // console.log('BOUCLE obstacle', obstacle, ' ',this.nextCoordX,' ', this.nextCoordY)
            if (obstacle[0] === this.nextCoordX && obstacle[1] === this.nextCoordY){
                this.isObstacleNextCoordinates = true;
                this.firstObstacleOnCommands = obstacle

            }
        }
    }
    advance(){
        this.coordX = this.nextCoordX;
        this.coordY = this.nextCoordY;
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