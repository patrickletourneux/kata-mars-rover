class MarsRover {
    coordinates = {
        X : 1 ,     // 1 to 5
        Y : 1 ,      // 1 to 5
    };              

    nextCoordinates = {
        X : 1 ,     // 1 to 5
        Y : 1 ,       // 1 to 5
    };               

    direction = 'N';            // N,S,E,W
    commandsArrayCharac = [];   // f,b,r,l
    obstaclesCoordArray = [];
    isObstacleNextCoordinates = false;
    firstObstacleOnCommands = {};
    moveResult = [];    

    move([...commands]){
        // console.log('letters ',commands)

        this.commandsArrayCharac = commands;

        this.executeCommands();
        
        return this.moveResult;
    }

    executeCommands(){
        for (let letter of this.commandsArrayCharac){
            // console.log('result ',[this.coordinates.X,this.coordinates.Y,this.direction])
            this.calculNextCoord(letter);
            this.handleEdges();
            this.isObstacleNextCoord();
            if (this.isObstacleNextCoordinates){ 
                this.moveResult = [this.firstObstacleOnCommands.X,this.firstObstacleOnCommands.Y,'obstacle']
                break;
            }
            this.advance();
            this.turn(letter);
            this.moveResult = [this.coordinates.X,this.coordinates.Y,this.direction];
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
            this.nextCoordinates.Y += value;
        }
        if (this.direction === 'E'){
            this.nextCoordinates.X += value;
        }
        if (this.direction === 'S'){
            this.nextCoordinates.Y -= value;
        }
        if (this.direction === 'W'){
            this.nextCoordinates.X -= value;
        }
    }
    handleEdges(){
        if (this.nextCoordinates.X === 0){
            this.nextCoordinates.X = 5;
        }
        if (this.nextCoordinates.Y === 0){
            this.nextCoordinates.Y = 5;
        }
        if (this.nextCoordinates.X === 6){
            this.nextCoordinates.X = 1;
        }
        if (this.nextCoordinates.Y === 6){
            this.nextCoordinates.Y = 1;
        }
    }
    isObstacleNextCoord(){
        for (let obstacle of this.obstaclesCoordArray){
            if (obstacle.X === this.nextCoordinates.X && obstacle.Y === this.nextCoordinates.Y){
                this.isObstacleNextCoordinates = true;
                this.firstObstacleOnCommands = obstacle
            }
        }
    }
    advance(){
        this.coordinates.X = this.nextCoordinates.X;
        this.coordinates.Y = this.nextCoordinates.Y;
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