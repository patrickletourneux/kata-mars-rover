const MarsRover = require('./MarsRover');

describe('MarsRover class', () => {
    
    const instance = new MarsRover();
    
    beforeEach(() => {
      instance.coordX = 1;
      instance.coordY = 1;
      instance.nextCoordX = 1;
      instance.nextCoordY = 1;
      instance.direction = 'N';
      instance.commandsArrayCharac = [];
      instance.obstaclesCoordArray = [];
    })

    describe('move()', () => {
    
      test(`move(['f']) return [1,2,'N']`, () => {
        expect(instance.move(['f'])).toEqual([1,2,'N']);
      });
      test(`move(['b']) return [1,5,'N']`, () => {
        expect(instance.move(['b'])).toEqual([1,5,'N']);
      });
      test(`move(['f']) return [2,1,'E']`, () => {
        instance.direction = 'E';
        expect(instance.move(['f'])).toEqual([2,1,'E']);
      });
      test(`move(['b']) return [2,1,'W']`, () => {
        instance.direction = 'W';
        expect(instance.move(['b'])).toEqual([2,1,'W']);
      });
      test(`move(['r']) return [1,1,'E']`, () => {
        expect(instance.move(['r'])).toEqual([1,1,'E']);
      });
      test(`move(['l']) return [1,1,'W']`, () => {
        expect(instance.move(['l'])).toEqual([1,1,'W']);
      });
      test(`move(['l','f','f']) return [-1,1,'W']`, () => {
        expect(instance.move(['l','f','f'])).toEqual([4,1,'W']);
      });
      test(`move(['l','l','f','f']) return [1,-1,'S']`, () => {
        expect(instance.move(['l','l','f','f'])).toEqual([1,4,'S']);
      }); 
      test(`move(['r','r','r','r','f','f','f','f','f']) return [1,1,'N']`, () => {
        expect(instance.move(['r','r','r','r','f','f','f','f','f'])).toEqual([1,1,'N']);
      });
      test(`move(['l','l','l','l','b','b','b','b','b']) return [1,1,'N']`, () => {
        expect(instance.move(['l','l','l','l','b','b','b','b','b'])).toEqual([1,1,'N']);
      });
      test(`obstacle move(['f','f']) return [1,2,'N']`, () => {
        instance.obstaclesCoordArray = [[1,3]]
        expect(instance.move(['f','f'])).toEqual([1,3,'obstacle']);
      });
      test(`obstacle move(['f','f']) return [1,2,'N']`, () => {
        instance.obstaclesCoordArray = [[5,1],[1,3],[3,3]]
        expect(instance.move(['f','f'])).toEqual([1,3,'obstacle']);
      });
    
    });
})